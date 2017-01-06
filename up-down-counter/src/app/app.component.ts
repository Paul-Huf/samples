import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  upCount = 0;
  downCount = 0;

  public incrementUpCount() {
    ++this.upCount;
  }

  public decrementDownCount() {
    --this.downCount;
  }
}
