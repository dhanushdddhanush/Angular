import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-example-ng',
  imports: [CommonModule],
  templateUrl: './example-ng.component.html',
  styleUrl: './example-ng.component.css'
})
export class ExampleNgComponent {
  show=true;
  details = [
    { name: 'Dhanush', age: 30, role: 'Developer' },
    { name: 'Chandu', age: 25, role: 'Designer' },
    { name: 'Jagadeesh', age: 35, role: 'Manager' }
  ];


}
