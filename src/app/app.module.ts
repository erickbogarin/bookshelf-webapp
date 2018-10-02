import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ModalModule } from 'ngx-bootstrap/modal';

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
  imports: [BrowserModule, SharedModule, ModalModule.forRoot(), AppRoutingModule, HomeModule],
  providers: [ApiService, AuthorsService, PaginationService, AlertService, SortByService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
