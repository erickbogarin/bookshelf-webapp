import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { AuthorResolver } from './author-resolver.service';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { AuthorCreateComponent } from './author-form/author-create/author-create.component';
import { AuthorUpdateComponent } from './author-form/author-update/author-update.component';

const authorRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'authors',
    children: [
      { path: 'create', component: AuthorCreateComponent },
      { path: ':id/update', component: AuthorUpdateComponent, resolve: { author: AuthorResolver } }
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
    AuthorFormComponent,
    AuthorCreateComponent,
    AuthorUpdateComponent
  ],
  exports: [
    AuthorListComponent
  ],
  providers: [
    AuthorResolver
  ]
})
export class AuthorModule {}
