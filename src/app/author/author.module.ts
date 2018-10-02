import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { AuthorCreateComponent } from './author-form/author-create/author-create.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { AuthorUpdateComponent } from './author-form/author-update/author-update.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorPage } from './author-page.component';
import { AuthorResolver } from './author-resolver.service';
import { AuthorRoutingModule } from './author-routing.module';

@NgModule({
  imports: [AuthorRoutingModule, SharedModule],
  declarations: [AuthorPage, AuthorListComponent, AuthorFormComponent, AuthorCreateComponent, AuthorUpdateComponent],
  exports: [AuthorListComponent, AuthorPage],
  providers: [AuthorResolver]
})
export class AuthorModule {}
