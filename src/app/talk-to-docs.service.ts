import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TalkToDocsService {

  constructor() { }

  loadNews() {

  }

  searchNews(words: string) : Observable<[{}]> {

    return 
  }
}
