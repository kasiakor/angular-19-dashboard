import { Component, Input, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      console.log('Sidebar isOpen:', changes['isOpen'].currentValue);
    }
  }
}
