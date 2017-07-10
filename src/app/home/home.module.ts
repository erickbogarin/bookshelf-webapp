import { ModuleWithProviders, NgModule, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SharedModule, DropdownDirective } from '../shared';
import { AuthorModule } from '../author/author.module';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);

@NgModule({
  imports: [
    homeRouting,
    SharedModule,
    AuthorModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
