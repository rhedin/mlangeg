import { Component, Input } from '@angular/core';
import { TalkToDocsService } from './talk-to-docs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() words: string = '';
  docs: [{}];

  constructor (private talkToDocs: TalkToDocsService) {}

  loadNews() {
    console.log(`In loadNews`);
    this.talkToDocs.loadNews();
  }

  searchNews() {
    console.log(`In searchNews`);
    this.talkToDocs.searchNews(this.words)
    .subscribe( (docs) => this.docs = docs);
  }
}
