import { Component, OnInit } from '@angular/core';
import { BalanceService, Bank } from '../services/balance.service';

@Component({
  // selector: 'app-green-bank',
  templateUrl: './green-bank.component.html',
  styleUrls: ['./green-bank.component.scss']
})
export class GreenBankComponent implements OnInit {

  balance: number;
  amount: number;

  constructor(private balanceSerice: BalanceService) { }

  ngOnInit() {
    this.balance = this.balanceSerice.getBalance( Bank.Green );
  }

  transfer() {
    console.log( `Transfer clicked with amount ${this.amount}` );
  }

}
