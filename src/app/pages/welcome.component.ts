import { SlideItemsService } from '../services/slide-items.service';
import { SlideItem } from '../models/slideitem';
import { Component, OnInit } from '@angular/core';
import { Ng2DeviceService } from 'ng2-device-detector';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']

})

export class WelcomeComponent implements OnInit {
  private deviceService: any;


  private videoEnded = false;
  private showVideoControl: any = false;

  ngOnInit(): void {
    this.showVideoControl = this.deviceService.isMobile();
  }

  constructor(private service: Ng2DeviceService) {
    this.deviceService = service;
  }


  videoEnd() {
    this.videoEnded = true;
  }

  pauseOrPlayVideo() {
    this.showVideoControl = null;
  }
}
