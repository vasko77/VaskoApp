import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-green-bank',
  templateUrl: './green-bank.component.html',
  styleUrls: ['./green-bank.component.scss']
})
export class GreenBankComponent implements OnInit {

  amount: number;

  constructor() { }

  ngOnInit() {
  }

  transfer() {
    console.log( `Transfer clicked with amount ${this.amount}` );
  }

}
