import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LogggingService } from './loggging.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TransferService {

  constructor(private http: Http, private logging: LogggingService) {
    this.http = http;
    this.logging = logging;
  }

  transfer(sender: string, receiver: string, amount: number): Observable<string> {

    const url = 'http://91.194.90.29:8008/api/v1/accounts/transfer';

    const body = {
      Sender: sender,
      Receiver: receiver,
      Amount: amount
    };

    return this.http.post(url, body)
      .map((respones: Response) => {
        const balance = respones.json().TxHash as string;
        return balance;
      })
      .catch((error: any) => {
        const errorMessage = this.logging.logError(error);
        return Observable.throw(errorMessage);
      });

  }

}
