import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sorting',
  imports: [NgFor],
  templateUrl: './sorting.component.html',
  styleUrl: './sorting.component.css'
})
export class SortingComponent {
  details = [
    { name: 'Dhanush', age: 30, role: 'Developer' },
    { name: 'Chandu', age: 25, role: 'Designer' },
    { name: 'Jagadeesh', age: 35, role: 'Manager' }
  ];
  constructor() {
    this.details.sort((a, b) => a.name.localeCompare(b.name));
  }

}
