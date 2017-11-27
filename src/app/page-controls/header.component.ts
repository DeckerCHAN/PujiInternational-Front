import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() bg: string;
  @Input() full: boolean;


  ngOnInit(): void {
  }

}
