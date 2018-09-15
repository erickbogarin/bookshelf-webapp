import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AlertComponent } from './components/alert/alert.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { SortByDirective } from './directives/sort-by.directive';

import './rxjs-operators';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule],
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
    ModalComponent
  ]
})
export class SharedModule {}
