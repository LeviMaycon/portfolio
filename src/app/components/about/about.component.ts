import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{

  status!: string;
  badgeColor!: string;

  ngOnInit() {
    this.updateStatus();
  }

  updateStatus() {
    const currentHour = new Date().getHours();
    if (currentHour > 12 || currentHour === 0) {
      this.status = 'Offline';
      this.badgeColor = 'bg-red-500';
    } else {
      this.status = 'Online';
      this.badgeColor = 'bg-green-500';
    }
  }
}
