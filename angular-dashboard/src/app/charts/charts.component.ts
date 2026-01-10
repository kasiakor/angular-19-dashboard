import { Component } from '@angular/core';
import type { Options } from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  standalone: true,
  selector: 'app-charts',
  imports: [HighchartsChartComponent],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent {
  chartOptions: Options = {
    chart: { type: 'area' },
    title: { text: 'Bloom Intensity (Spring → Summer)' },
    xAxis: { categories: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'] },
    yAxis: { title: { text: 'Bloom index' } },
    tooltip: { shared: true },
    plotOptions: {
      area: { marker: { enabled: false } },
    },
    accessibility: {
      enabled: false,
    },
    series: [
      { name: 'Roses', type: 'area', data: [1, 3, 6, 7, 5, 3] },
      { name: 'Lavender', type: 'area', data: [0, 2, 5, 8, 7, 4] },
      { name: 'Sunflowers', type: 'area', data: [0, 1, 3, 6, 8, 6] },
    ],
  };

  chartOptionsPie: Options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
    },

    title: {
      text: 'Flower Stock Distribution',
    },

    credits: {
      enabled: false,
    },

    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b> ({point.y} stems)',
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f}%',
          style: {
            fontSize: '13px',
          },
        },
      },
    },
    accessibility: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        name: 'Stock',
        data: [
          { name: 'Roses', y: 120, color: '#E63946' }, // rose red
          { name: 'Tulips', y: 200, color: '#F4A261' }, // warm orange
          { name: 'Sunflowers', y: 85, color: '#F1C40F' }, // sunflower yellow
          { name: 'Lilies', y: 60, color: '#ECF0F1' }, // soft white
          { name: 'Orchids', y: 25, color: '#9B59B6' }, // royal purple
          { name: 'Daisies', y: 300, color: '#2ECC71' }, // fresh green
        ],
      },
    ],
  };
}
