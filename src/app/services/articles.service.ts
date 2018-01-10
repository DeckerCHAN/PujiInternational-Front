import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';
import { Summary } from '../models/summary';
import { summariesUrl, summariesPageSize, headers, postByIdUrl } from '../config';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getArticle(id: string): Observable<Article> {
    const body = JSON.stringify({
      byField: id
    });

    return this.http.post(postByIdUrl, body, {headers: headers}).pipe(map(obj => obj['article']));
  }

  getSummaries(): Observable<Summary[]> {


    const body = JSON.stringify({
      page: 0,
      numberEachPage: summariesPageSize
    });
    return this.http.post(summariesUrl, body, {headers: headers}).pipe(map(obj => obj['summaries']));


    // return this.http.post(summariesUrl, JSON.stringify({
    //   page: 0,
    //   numberEachPage: summariesPageSize
    // }), {headers: headers}).toPromise()
    //   .then(res => res.json().data.summaries as Summary[]);


  }

}
