import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { StringLengthPipe } from './string-length.pipe';
import { HighlightDirective } from './highlight.directive';
import { SortingComponent } from './components/sorting/sorting/sorting.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,StringLengthPipe,HighlightDirective,SortingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'This is from App Component';
 
}
