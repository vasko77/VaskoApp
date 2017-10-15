import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

@Injectable()
export class LogggingService {

  constructor() { }

  logError(response: Response | any): string {

    let errorMessage = 'error';
    if (response instanceof Response) {
      const body = response.json() || '';
      const error = body.error || JSON.stringify(body);
      errorMessage = `
            ${response.status}
            ${response.statusText}
            ${error}
          `;
    }
    return errorMessage;
  }
}
