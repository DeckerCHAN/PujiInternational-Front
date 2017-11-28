import { SlideItemsService } from '../services/slide-items.service';
import { SlideItem } from '../models/slideitem';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
})

export class PrimaryComponent implements OnInit {

  title = '普济国际';
  subTitle = '普度众生，兼济天下';
  bg = 'assets/img/bg.jpg';



  slideItems: SlideItem[];

  constructor(private slideService: SlideItemsService) {
  }


  ngOnInit(): void {
    this.slideService.getItems().then(items => this.slideItems = items);
  }


}
