import { Component, Input, OnInit } from '@angular/core';
import { Summary } from '../models/summary';
import { ArticleService } from '../services/articles.service';
import { summaries } from '../mock/mock-articles';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit {
  summaries: Summary [];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.articleService.getSummaries().subscribe(s => this.summaries = s);
  }

}
