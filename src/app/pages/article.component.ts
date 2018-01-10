import { SlideItemsService } from '../services/slide-items.service';
import { SlideItem } from '../models/slideitem';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import marked from 'marked';

import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})

export class ArticleComponent implements OnInit {



  active = false;
  mdParser: any;

  articleId: string;
  article: Article;

  constructor(route: ActivatedRoute, private articleService: ArticleService) {
    this.articleId = route.snapshot.paramMap.get('id');
    this.mdParser = marked.setOptions({});
  }

  ngOnInit(): void {
    this.articleService.getArticle(this.articleId).subscribe(article => {
      this.article = article;
    });

  }

  convertToHTML(md): string {
    if (md) {
      return this.mdParser.parse(md);

    }else {
      return '';
    }
  }

  toggleMenuOn(event) {
    event.preventDefault();
    this.active = !this.active;
  }

  toggleMenuOff(event) {
    event.preventDefault();
    this.active = !this.active;

  }

  handleError(arg0: any): any {
    throw new Error('Method not implemented.');
  }

}
