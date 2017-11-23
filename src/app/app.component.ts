import {Component, OnInit} from '@angular/core';
import {SlideItemsService} from './services/slide-items.service';
import {SlideItem} from './models/slideitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  today = Date.now();

}
