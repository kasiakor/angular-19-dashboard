import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Output() openSidebar = new EventEmitter<void>();

  onButtonClick() {
    console.log('Navbar button clicked');
    this.openSidebar.emit();
  }
}
