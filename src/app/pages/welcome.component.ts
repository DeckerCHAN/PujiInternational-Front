import { SlideItemsService } from '../services/slide-items.service';
import { SlideItem } from '../models/slideitem';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']

})

export class WelcomeComponent {

  private videoEnded = false;

  videoEnd() {
    this.videoEnded = true;
  }
}
