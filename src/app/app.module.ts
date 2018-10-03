import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import {
  AlertService,
  ApiService,
  AuthorsService,
  FooterComponent,
  HeaderComponent,
  ModalService,
  PaginationService,
  SharedModule,
  SortByService
} from './shared';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule, HomeModule],
  providers: [ApiService, AuthorsService, PaginationService, AlertService, SortByService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
