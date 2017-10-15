import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LogggingService } from './loggging.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BalanceService implements OnInit {

  constructor(private http: Http, private logging: LogggingService) {
    this.http = http;
    this.logging = logging;
  }

  ngOnInit(): void {
  }

  getBalance(account: string): Observable<number> {

    const url = `http://91.194.90.29:8008/api/v1/accounts/${account}/balance`;

    return this.http.get( url )
    .map( (respones: Response) => {
      const balance = respones.json().Balance as number;
      return balance;
    } )
    .catch( ( error: any ) => {
      const errorMessage = this.logging.logError( error );
      return Observable.throw( errorMessage );
    } );

  }

}
