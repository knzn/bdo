import { Component } from '@angular/core';

import { Farm } from './farming/farming.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedFarms: Farm[] = [];

  onFarmAdded(post) {
    this.storedFarms.push(post);
  }
}
