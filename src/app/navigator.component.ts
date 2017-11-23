import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
})

export class NavigatorComponent implements OnInit {
  active = false;

  ngOnInit(): void {
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
