import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { BlueBankComponent } from './blue-bank/blue-bank.component';
import { GreenBankComponent } from './green-bank/green-bank.component';
import { TransferService } from './services/transfer.service';
import { BalanceService } from './services/balance.service';
import { LogggingService } from './services/loggging.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    BlueBankComponent,
    GreenBankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TransferService, BalanceService, LogggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
