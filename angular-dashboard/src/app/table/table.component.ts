import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  AllCommunityModule,
  ColDef,
  GridApi,
  ModuleRegistry,
  provideGlobalGridOptions,
} from 'ag-grid-community';

// Register all community features
ModuleRegistry.registerModules([AllCommunityModule]);

// Mark all grids as using legacy themes
provideGlobalGridOptions({ theme: 'legacy' });

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  gridApi!: GridApi;
  colDefs: ColDef[] = [
    { headerName: 'Flower', field: 'flower', sortable: true, filter: true },
    { headerName: 'Color', field: 'color', filter: true },
    { headerName: 'Season', field: 'season', filter: true },
    { headerName: 'Price', field: 'price', type: 'numericColumn' },
    { headerName: 'In Stock', field: 'stock', type: 'numericColumn' },
  ];

  rowData = [
    {
      flower: 'Rose',
      color: 'Red',
      season: 'All year',
      price: 2.5,
      stock: 120,
    },
    {
      flower: 'Tulip',
      color: 'Yellow',
      season: 'Spring',
      price: 1.8,
      stock: 200,
    },
    {
      flower: 'Sunflower',
      color: 'Yellow',
      season: 'Summer',
      price: 2.2,
      stock: 85,
    },
    { flower: 'Lily', color: 'White', season: 'Spring', price: 3.0, stock: 60 },
    {
      flower: 'Orchid',
      color: 'Purple',
      season: 'All year',
      price: 8.5,
      stock: 25,
    },
    {
      flower: 'Daisy',
      color: 'White',
      season: 'Summer',
      price: 1.2,
      stock: 300,
    },
  ];
  onGridReady(event: any) {
    this.gridApi = event.api;
  }
}
