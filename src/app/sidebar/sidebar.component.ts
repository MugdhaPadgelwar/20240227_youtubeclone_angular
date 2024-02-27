import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  menuItems: {
    label: string;
    class: string;
  }[] = [
    { label: 'Mugdha', class: 'fa-solid fa-sun' },
    { label: 'Shopping', class: 'fa-solid fa-house' },
    { label: 'Music', class: 'fa-solid fa-house' },
    { label: 'Movies', class: 'fa-solid fa-house' },
    { label: 'Live', class: 'fa-solid fa-house' },
    { label: 'Gaming', class: 'fa-solid fa-house' },
    { label: 'Music', class: 'fa-solid fa-house' },
  ];
}
