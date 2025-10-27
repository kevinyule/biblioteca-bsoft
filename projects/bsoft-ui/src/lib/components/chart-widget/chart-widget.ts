import { Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartType, ChartData, ChartDataset } from 'chart.js';
import 'chart.js/auto';

@Component({
  selector: 'lib-chart-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-widget.html',
  styleUrl: './chart-widget.css'
})
export class ChartWidget implements AfterViewInit {
  @ViewChild('chartCanvas') chartRef!: ElementRef<HTMLCanvasElement>;
  chartInstance!: Chart;

  /** Tipo de gráfico ('line', 'bar', 'doughnut', etc.) */
  @Input() chartType: ChartType = 'line';

  /** Etiquetas del gráfico (eje X o categorías) */
  @Input() labels: string[] = [];

  /** Datos (datasets de Chart.js v3+) */
  @Input() datasets: ChartDataset<any>[] = [];

  /** Título opcional */
  @Input() title: string = '';

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    if (this.chartInstance) this.chartInstance.destroy();

    const chartData: ChartData = {
      labels: this.labels,
      datasets: this.datasets
    };

    this.chartInstance = new Chart(this.chartRef.nativeElement, {
      type: this.chartType,
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: !!this.title,
            text: this.title,
          },
          legend: { position: 'bottom' },
        },
      },
    });
  }
}
