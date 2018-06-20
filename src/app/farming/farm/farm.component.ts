import { Component, EventEmitter, Output } from '@angular/core';

import { Farm } from '../farming.model';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent {
  itemName = '';
  amount = 0;
  price = 0;
  total = Number;
  sum = 0;
  @Output() farmTotal = new EventEmitter<Farm>();

  onAddFarm() {
    this.sum = (this.amount * this.price) + this.sum;
    const farm: Farm = {itemName: this.itemName, total: this.amount * this.price, amount: this.amount, price: this.price};
    this.farmTotal.emit(farm);
  }
}
