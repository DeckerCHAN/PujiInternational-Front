import {SlideItemsService} from './services/slide-items.service';
import {SlideItem} from './models/slideitem';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})

export class ArticleComponent {
  today = Date.now();

  title = '普济国际';
  subtitle = '副标题副标题';
  active = false;


  toggleMenuOn(event) {
    event.preventDefault();
    this.active = !this.active;
  }

  toggleMenuOff(event) {
    event.preventDefault();
    this.active = !this.active;

  }
}
