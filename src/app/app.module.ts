import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



// Modules from this app -----------------------
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";

import { CheckerModule } from './checker/checker.module';
import { MaterialModule } from './material/material.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

   
    AppRoutingModule, // store the routing in another file
   
    // Modules from this app -----------
    CheckerModule,
    MaterialModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
