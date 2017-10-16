import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BalanceService } from '../services/balance.service';
import { TransferService } from '../services/transfer.service';
import { blueAccount, greenAccount } from '../shared/constants';
import { ToastsManager } from 'ng2-toastr';
import { Subscription } from 'rxjs/Subscription';

@Component({
  // selector: 'app-blue-bank',
  templateUrl: './blue-bank.component.html',
  styleUrls: ['./blue-bank.component.scss']
})
export class BlueBankComponent implements OnInit {

  mouseOverTransfer: boolean;

  balance: number;
  amount: number;
  hash: string;

  busyBalance: Subscription;
  busyTransfer: Subscription;

  constructor(
    private balanceSerice: BalanceService,
    private transferService: TransferService,
    public toastr: ToastsManager, vcr: ViewContainerRef
  ) {
      this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
    this.getBalance();
  }

  transfer() {

    this.busyTransfer = this.transferService.transfer(blueAccount, greenAccount, this.amount)
      .subscribe((hash: string) => {
        this.hash = hash;
        const message = `Transfer completed with hash ${this.hash}`;
        this.toastr.success( message, 'Success!', { dismiss: 'click' } );
        console.log(message);
      },
      (error: any) => {
        this.toastr.error( 'Something went wrong', 'Error', { dismiss: 'click' } );
        console.error(error);
      }
      );

    this.getBalance();
  }

  getBalance() {
    this.busyBalance = this.balanceSerice.getBalance(blueAccount)
      .subscribe(
      (result: number) => {
        console.log( `Balance: ${this.balance}` );
        this.balance = result;
      },
      (error: any) => {
        console.error(error);
      }
      );
  }

}
