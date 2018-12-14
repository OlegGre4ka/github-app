import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesComponent } from './repositories/repositories.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DetailedInfoReposComponent } from './repositories/detailed-info-repos/detailed-info-repos.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'repositories' },
  { path: 'repositories', component: RepositoriesComponent },
  { path: 'repositories/:name/:id', component: DetailedInfoReposComponent },

  { path: 'contacts', component: ContactsComponent },

  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
 exports: [
  RouterModule
 ]
})
export class AppRoutingModule { }
