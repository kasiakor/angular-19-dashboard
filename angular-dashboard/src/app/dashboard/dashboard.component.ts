import { Component } from '@angular/core';
import { ChartsComponent } from '../charts/charts.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-dashboard',
  imports: [TableComponent, ChartsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
