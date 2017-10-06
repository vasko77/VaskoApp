import { Injectable } from '@angular/core';

@Injectable()
export class BalanceService {

  constructor() { }

  getBalance(bank: Bank): number {

    switch (bank) {
      case Bank.Blue:
        console.log( 'Getting Blue Bank Balance' );
        return 10000;

     case Bank.Green:
        console.log( 'Getting Green Bank Balance' );
        return 20000;
      }

  }

}

export enum Bank {
  Blue,
  Green
}
