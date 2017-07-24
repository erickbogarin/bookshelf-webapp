import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { DropdownDirective } from './directives/dropdown.directive';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AlertComponent } from './components/alert/alert.component';
import { SortByDirective } from './directives/sort-by.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    DropdownDirective,
    PaginationComponent,
    AlertComponent,
    SortByDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    DropdownDirective,
    SortByDirective,
    PaginationComponent,
    AlertComponent
  ]
})
export class SharedModule {}
