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
  private flag: boolean;
  
  constructor() { }

  ngOnInit() {

  }

  getStock(stockName: string): void {
    for (var i = 0; i < STOCK.length; i++) {
      if (STOCK[i].name.toLowerCase() == stockName.toLowerCase()) {
        this.currentStock = STOCK[i];
        this.flag = true;
        // tslint:disable-next-line: max-line-length
        this.currentStock.prediction = Math.ceil((this.currentStock.d1 + this.currentStock.d2 + this.currentStock.d3 + this.currentStock.d4 + this.currentStock.d5) / 5);
        
      }
    }
  }
}
