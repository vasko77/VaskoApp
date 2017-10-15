import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../services/balance.service';
import { TransferService } from '../services/transfer.service';
import { blueAccount, greenAccount } from '../shared/constants';

@Component({
  // selector: 'app-blue-bank',
  templateUrl: './blue-bank.component.html',
  styleUrls: ['./blue-bank.component.scss']
})
export class BlueBankComponent implements OnInit {

  balance: number;
  amount: number;
  hash: string;

  constructor(private balanceSerice: BalanceService, private transferService: TransferService) { }

  ngOnInit() {
    this.getBalance();
  }

  transfer() {

    this.transferService.transfer(blueAccount, greenAccount, this.amount)
      .subscribe((hash: string) => {
        this.hash = hash;
        console.log(`Transfer completed with hash ${this.hash}`);
      },
      (error: any) => {
        console.error(error);
      }
      );

    this.getBalance();
  }

  getBalance() {
    this.balanceSerice.getBalance(blueAccount)
      .subscribe(
      (result: number) => {
        this.balance = result;
      },
      (error: any) => {
        console.error(error);
      }
      );
  }

}
