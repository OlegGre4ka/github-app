import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { RepositoriesComponent } from './repositories/repositories.component';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { RepositoryComponent } from './repositories/repository/repository.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailedInfoReposComponent } from './repositories/detailed-info-repos/detailed-info-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashscreenComponent,
    RepositoriesComponent,
    ContactsComponent,
    RepositoryComponent,
    DetailedInfoReposComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    ClarityModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
