import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { STOCK } from './stock-data';

@Injectable()
export class HelperService {
  private currentStock: Stock;
  private flag: boolean;
  private search_flag: boolean;
  private pastSearches: Stock[] = new Array();

  constructor() { }

  getStock(stockName: string): void {
    for (var i = 0; i < STOCK.length; i++) {
      if (STOCK[i].name.toLowerCase() == stockName.toLowerCase()) {
        this.currentStock = STOCK[i];
        this.flag = true;
        this.search_flag = true;
        // tslint:disable-next-line: max-line-length
        this.currentStock.prediction = Math.ceil((this.currentStock.d1 + this.currentStock.d2 + this.currentStock.d3 + this.currentStock.d4 + this.currentStock.d5) / 5);
        this.pastSearches.push(STOCK[i]);
        console.log(this.pastSearches[0]);
      }
    }
  }

  // getMsg(temp_flag: boolean): String {
  //   temp_flag = this.flag;
  //   if (temp_flag) {
  //     return '';
  //   }
  //   return 'Invalid StockName';
  // }
}
