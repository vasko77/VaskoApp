import { Component, OnInit } from '@angular/core';
import { BalanceService, Bank } from '../services/balance.service';

@Component({
  // selector: 'app-blue-bank',
  templateUrl: './blue-bank.component.html',
  styleUrls: ['./blue-bank.component.scss']
})
export class BlueBankComponent implements OnInit {

  balance: number;
  amount: number;

  constructor(private balanceSerice: BalanceService) { }

  ngOnInit() {
    this.balance = this.balanceSerice.getBalance( Bank.Blue );
  }

  transfer() {
    console.log( `Transfer clicked with amount ${this.amount}` );
  }


}
