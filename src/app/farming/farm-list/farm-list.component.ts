import { Component, Input } from '@angular/core';

import { Farm } from '../farming.model';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm.list.components.css']
})
export class FarmListComponent {
  @Input() farms: Farm[] = [];
}
