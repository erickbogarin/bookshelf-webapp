import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AlertComponent, ModalComponent, PaginationComponent } from './components';
import { DropdownDirective, SortByDirective } from './directives';
import { FAModule } from './modules';

import './rxjs-operators';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule, FAModule],
  declarations: [DropdownDirective, PaginationComponent, AlertComponent, SortByDirective, ModalComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    DropdownDirective,
    SortByDirective,
    PaginationComponent,
    AlertComponent,
    ModalComponent,
    FAModule
  ]
})
export class SharedModule {}
