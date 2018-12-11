import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
    HttpClientModule,
    NotFoundComponent
  ]
})
export class SharedModule { }
