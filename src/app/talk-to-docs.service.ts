import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TalkToDocsService {

  constructor(private http: HttpClient) { }

  loadNews(words: string) : Observable<Array<Object>> {
    return this.http.post<Array<Object>>(
      'localhost:3000/loadNews',
      {words: words}
    );
  }

  searchNews(words: string) : Observable<Array<Object>> {
    return this.http.post<Array<Object>>(
      'localhost:3000/searchNews',
      {words: words}
    );
    return 
  }
}
