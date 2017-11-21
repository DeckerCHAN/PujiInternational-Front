import {Component, OnInit} from '@angular/core';
import {SlideItemsService} from './services/slide-items.service';
import {SlideItem} from './models/slideitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  today = Date.now();

  title = '普济国际';
  subtitle = '副标题副标题';
  active = false;

  slideItems: SlideItem[];

  constructor(private slideService: SlideItemsService) {
  }


  ngOnInit(): void {
    this.slideService.getItems().then(items => this.slideItems = items);
  }

  toggleMenuOn(event) {
    event.preventDefault();
    this.active = !this.active;
  }

  toggleMenuOff(event) {
    event.preventDefault();
    this.active = !this.active;

  }
}
