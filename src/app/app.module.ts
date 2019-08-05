import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { HelperService } from './helper.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FooterComponent,
    SearchHistoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }


