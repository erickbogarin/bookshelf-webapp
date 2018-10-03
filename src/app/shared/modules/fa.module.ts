import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faBook, faUserTie, faCubes, faPlusCircle, faEllipsisV, faEdit, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faBook, faUserTie, faCubes, faGithub, faPlusCircle, faEllipsisV, faEdit, faTrash, faSearch);

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class FAModule {}
