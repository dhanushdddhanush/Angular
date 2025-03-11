import { Component } from '@angular/core';
import { ExampleNgComponent } from '../example-ng/example-ng.component';

@Component({
  selector: 'app-header',
  imports: [ExampleNgComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
title = 'I am Header Component';
}
