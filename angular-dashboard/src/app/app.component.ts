import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SidebarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-dashboard';
  isSidebarOpen = true;

  toggleSidebar(): void {
    console.log('from app', this.isSidebarOpen);
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
