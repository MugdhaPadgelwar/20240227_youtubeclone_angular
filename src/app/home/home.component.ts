import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
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

  headerMenuItems: {
    label: string;
    isActive: boolean;
  }[] = [
    { label: 'All', isActive: true },
    { label: 'Music', isActive: false },
    { label: 'Bollywood Music', isActive: false },
    { label: 'Chill-out music', isActive: false },
    { label: 'Animated films', isActive: false },
    { label: 'Dramedy', isActive: false },
    { label: 'Tamil Cinema', isActive: false },
    { label: 'Mantras', isActive: false },
  ];
}
