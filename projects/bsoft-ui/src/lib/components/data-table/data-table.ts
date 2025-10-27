import { Component, Input, Output, EventEmitter, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TableColumn {
  key: string;
  label: string;
  width?: string;
}

@Component({
  selector: 'lib-data-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css',
})
export class DataTable {
  // Props equivalentes
  @Input() data: any[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() pageSize: number = 5;
  @Input() pageSizeOptions: number[] = [5, 10, 20, 50, 0];
  @Input() showCheckbox: boolean = false;
  @Input() selectionMode: 'single' | 'multiple' = 'multiple';

  @Output() change = new EventEmitter<any[]>();
  pageSizeSelected: number = this.pageSize;


  // Estado
  currentPage = signal(1);
  selectedRows = signal<any[]>([]);
  filters = signal<Record<string, string>>({});
  showFilters = signal<Record<string, boolean>>({});
  selectedPageSize = signal(this.pageSize);
  sortKey = signal<string | null>(null);
  sortOrder = signal<'asc' | 'desc' | null>(null);

  ngOnInit() {
    const initFilters: Record<string, string> = {};
    const initShowFilters: Record<string, boolean> = {};
    this.columns.forEach((col) => {
      initFilters[col.key] = '';
      initShowFilters[col.key] = false;
    });
    this.filters.set(initFilters);
    this.showFilters.set(initShowFilters);
  }
  trackByIndex(index: number, _: any): number {
    return index;
  }

  updateFilter(key: string, value: string) {
  const current = this.filters();
  this.filters.set({ ...current, [key]: value });
  this.applyFilters();
}


  // === Computed ===
  filteredData = computed(() => {
    let result = [...this.data];
    const filters = this.filters();

    Object.keys(filters).forEach((key) => {
      const value = filters[key];
      if (value && value.trim() !== '') {
        const filterValue = value.toLowerCase();
        result = result.filter((row) =>
          String(row[key] ?? '')
            .toLowerCase()
            .includes(filterValue)
        );
      }
    });

    const sortKey = this.sortKey();
    const sortOrder = this.sortOrder();

    if (sortKey && sortOrder) {
      result.sort((a, b) => {
        const aVal = a[sortKey];
        const bVal = b[sortKey];
        if (aVal == null) return 1;
        if (bVal == null) return -1;
        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
        }
        return sortOrder === 'asc'
          ? String(aVal).localeCompare(String(bVal))
          : String(bVal).localeCompare(String(aVal));
      });
    }

    return result;
  });

  paginatedData = computed(() => {
    const data = this.filteredData();
    const pageSize = this.selectedPageSize();
    if (pageSize === 0) return data;
    const start = (this.currentPage() - 1) * pageSize;
    return data.slice(start, start + pageSize);
  });

  totalPages = computed(() => {
    const size = this.selectedPageSize();
    return size === 0 ? 1 : Math.ceil(this.filteredData().length / size);
  });

  // === Métodos ===
  toggleSort(key: string) {
    if (this.sortKey() === key) {
      if (this.sortOrder() === 'asc') this.sortOrder.set('desc');
      else if (this.sortOrder() === 'desc') {
        this.sortKey.set(null);
        this.sortOrder.set(null);
      } else this.sortOrder.set('asc');
    } else {
      this.sortKey.set(key);
      this.sortOrder.set('asc');
    }
  }

  toggleFilter(key: string) {
    const current = this.showFilters();
    this.showFilters.set({ ...current, [key]: !current[key] });
  }

  changePageSize() {
  const size = Number(this.pageSizeSelected);
  this.selectedPageSize.set(size);
  this.currentPage.set(1);
}


  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  applyFilters() {
    this.currentPage.set(1);
  }

  isSelected(row: any) {
    return this.selectedRows().includes(row);
  }

  toggleRowSelection(row: any) {
    if (this.selectionMode === 'single') {
      this.selectedRows.set([row]);
    } else {
      const current = [...this.selectedRows()];
      const index = current.indexOf(row);
      if (index === -1) current.push(row);
      else current.splice(index, 1);
      this.selectedRows.set(current);
    }
    this.emitSelected();
  }

  emitSelected() {
    this.change.emit(this.selectedRows());
  }
}
