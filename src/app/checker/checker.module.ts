import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Third party libraries
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { NouisliderModule } from 'ng2-nouislider';

import { CheckerComponent } from './checker.component';


@NgModule({
  declarations: [
    CheckerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    NouisliderModule,
  ],
  providers: [],
})
export class CheckerModule { }
