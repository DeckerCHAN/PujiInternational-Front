import { SlideItemsService } from '../services/slide-items.service';
import { SlideItem } from '../models/slideitem';
import { Component, OnInit } from '@angular/core';
import { Ng2DeviceService } from 'ng2-device-detector';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']

})

export class WelcomeComponent {

  private deviceService: any;

  constructor(private service: Ng2DeviceService) {
    this.deviceService = service;
  }

  private videoEnded = false;

  videoEnd() {
    this.videoEnded = true;
  }
}
