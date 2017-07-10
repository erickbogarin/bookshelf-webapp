import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { AuthorModule } from './author/author.module';
import { HomeModule } from './home/home.module';

import {
  ApiService,
  AuthorsService,
  SharedModule,
  PaginationService,
  HeaderComponent
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ModalModule.forRoot(),
    rootRouting,
    AuthorModule,
    HomeModule
  ],
  providers: [
    ApiService,
    AuthorsService,
    PaginationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
