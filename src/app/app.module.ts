import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { StockComponent } from './stock/stock.component';

import { AppRoutingModule } from './app-routing.module';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { HelperService } from './helper.service';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FooterComponent,
    SearchHistoryComponent,
    StockComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }


