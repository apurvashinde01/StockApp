import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(public helperService: HelperService) { }

  ngOnInit() {
  }

}
