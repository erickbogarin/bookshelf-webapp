import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorCreateComponent } from './author-form/author-create/author-create.component';
import { AuthorUpdateComponent } from './author-form/author-update/author-update.component';
import { AuthorPage } from './author-page.component';
import { AuthorResolver } from './author-resolver.service';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AuthorPage },
      { path: 'create', component: AuthorCreateComponent },
      {
        path: ':id/update',
        component: AuthorUpdateComponent,
        resolve: { author: AuthorResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule {}
