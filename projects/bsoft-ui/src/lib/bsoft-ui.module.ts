import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa tus componentes
import { DataTable } from './components/data-table/data-table';
import { TextField } from './components/text-field/text-field';
import { SelectList } from './components/select-list/select-list';
import { ChartWidget } from './components/chart-widget/chart-widget';

@NgModule({
  imports: [
    CommonModule,
    DataTable,
    TextField,
    SelectList,
    ChartWidget
  ],
  exports: [
    DataTable,
    TextField,
    SelectList,
    ChartWidget
  ]
})
export class BsoftUiModule {}
