import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '普济国际';
  subtitle = '副标题副标题'

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
