import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { STOCK } from './stock-data';

@Injectable()
export class HelperService {
  private currentStock: Stock;
  private flag: boolean;
  private search_flag: boolean;
  private msg_flag: boolean;
  private msg: string;
  private pastSearches: Stock[] = new Array();
  constructor() { }

  getStock(stockName: string): void {
    this.msg = 'Invalid Stock Name: ' + stockName + '';
    for (var i = 0; i < STOCK.length; i++) {
      if (STOCK[i].name.toLowerCase() == stockName.toLowerCase()) {
        var d = new Date().toLocaleDateString();
        var t = new Date().toLocaleTimeString();
        this.currentStock = STOCK[i];
        this.flag = true;
        this.search_flag = true;
        this.msg_flag = true;   // validation
        // tslint:disable-next-line: max-line-length
        this.currentStock.prediction = Math.ceil((this.currentStock.d1 + this.currentStock.d2 + this.currentStock.d3 + this.currentStock.d4 + this.currentStock.d5) / 5);
        this.currentStock.searchTime = d + ' ' + t;
        this.pastSearches.push(STOCK[i]);
        this.msg = 'Stock Found';
      }
    }
  }
}
