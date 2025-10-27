import { Component, Input, Output, EventEmitter, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ IMPORTANTE

@Component({
  selector: 'lib-select-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ AGREGA FormsModule AQUÍ
  templateUrl: './select-list.html',
  styleUrl: './select-list.css',
})
export class SelectList {
  @Input() value: any = null;
  @Input() options: any[] = [];
  @Input() valueKey: string = 'value';
  @Input() labelKey: string = 'label';
  @Input() displayMode: 'label' | 'value' | 'both' = 'label';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() visible: boolean = true;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;

  @Output() valueChange = new EventEmitter<any>();
  @Output() change = new EventEmitter<any>();

  focused = signal(false);
  localValue = signal<any>('');

  selectedOption = computed(() =>
    this.options.find(opt => opt[this.valueKey] === this.localValue())
  );

  constructor() {
    effect(() => {
      if (this.value && typeof this.value === 'object') {
        this.localValue.set(this.value[this.valueKey]);
      } else {
        this.localValue.set(this.value);
      }
    });
  }

  emitChange(value: any) {
    this.localValue.set(value);
    const selected = this.options.find(opt => opt[this.valueKey] === value) || null;
    this.valueChange.emit(selected);
    this.change.emit(selected);
  }

  clearSelection() {
    this.localValue.set('');
    this.valueChange.emit(null);
    this.change.emit(null);
  }

  formatOption(opt: any): string {
    if (!opt) return '';
    if (this.displayMode === 'label') return opt[this.labelKey];
    if (this.displayMode === 'value') return opt[this.valueKey];
    if (this.displayMode === 'both') return `${opt[this.valueKey]} - ${opt[this.labelKey]}`;
    return opt[this.labelKey];
  }
}
