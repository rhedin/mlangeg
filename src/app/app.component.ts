import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() words: string = '';

  loadNews() {
    console.log(`In loadNews`);
  }

  searchNews() {
    console.log(`In searchNews`);
  }
}
