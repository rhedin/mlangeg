import { Component, Input } from '@angular/core';
import { TalkToDocsService } from './talk-to-docs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() words: string = '';
  docs: Array<Object> = [];

  constructor (private talkToDocs: TalkToDocsService) {}

  loadNews() {
    this.talkToDocs.loadNews(this.words)
    .subscribe(
      (docs) => {
        this.docs = docs;
        setTimeout( () => this.searchNews(), 1000);  // Not the prettiest solution.
      },
      (error) => console.log(`Error calling talkToDocs.loadNews.  Error = ${error}`)
    );
  }

  searchNews() {
    this.talkToDocs.searchNews(this.words)
    .subscribe(
      (docs) => this.docs = docs,
      (error) => console.log(`Error calling talkToDocs.searchNews.  Error = ${error}`)
    );
  }
}
