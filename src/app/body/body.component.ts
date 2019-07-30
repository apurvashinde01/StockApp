import { Component, OnInit } from '@angular/core';
import { STOCK } from '../stock-data';
import { Stock } from '../stock';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  private currentStock: Stock;
  
  constructor() { }

  ngOnInit() {
  }

}
