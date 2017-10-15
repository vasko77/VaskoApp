import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../services/balance.service';

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
    this.balanceSerice.getBalance( '0x10BfCB0883a9bC56A9C3b3b817ff4e289Dbb6e42' )
    .subscribe(
        ( result: number ) => {
          this.balance = result;
        },
        ( error: any ) => {
          console.error( error );
        }
      );
}

  transfer() {
    console.log( `Transfer clicked with amount ${this.amount}` );
  }

}
