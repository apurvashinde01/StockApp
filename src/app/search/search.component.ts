import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { STOCK } from '../stock-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private currentStock: Stock;
  constructor() { }

  ngOnInit() {

  }

  getStock(stockName: string): void {
    for (var i = 0; i < STOCK.length; i++) {
      if (STOCK[i].name.toLowerCase == stockName.toLowerCase) {
        this.currentStock = STOCK[i];
      }
    }
  }
}
