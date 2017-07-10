import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { SharedModule } from '../shared';

const authorRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'authors',
    children: [
      { path: 'create', component: AuthorFormComponent }
    ]
  }
]);

@NgModule({
  imports: [
    authorRouting,
    SharedModule
  ],
  declarations: [
    AuthorListComponent,
    AuthorFormComponent
  ],
  exports: [
    AuthorListComponent
  ]
})
export class AuthorModule {}
