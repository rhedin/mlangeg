import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TalkToDocsService {

  constructor(private http: HttpClient) { }

  loadNews(words: string) : Observable<Array<Object>> {
    console.log(`In TalkToDocsService.loadNews`);
    return this.http.post<Array<Object>>(
      'http://localhost:3000/docs/loadNews',
      {words: words}
    );
  }

  // searchNews(words: string) : Observable<Array<Object>> {
  //   return this.http.post<Array<Object>>(
  //     'http://localhost:3000/docs/searchNews',
  //     {words: words}
  //   );
  // }

  searchNews(words: string) : Observable<Array<Object>> {
    return this.http.get<Array<Object>>(
      'http://localhost:3000/docs/searchNews'
    );
  }
}
