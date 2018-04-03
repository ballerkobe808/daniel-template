import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';



/** Pages to navigate too */
import {CheckerComponent} from './checker/checker.component';
import {MaterialComponent} from './material/material.component';
import {MaterialLoginComponent} from './material/login/material-login.component';
import {LoginComponent} from './login/login.component';


const appRoutes: Routes = [
  {
    path: 'material',
    component: MaterialComponent
  },
  {
    path: 'material-login',
    component: MaterialLoginComponent
  },
  {
    path: 'checker',
    component: CheckerComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/checker',
    pathMatch: 'full'
  },
  { path: '**',
    component: CheckerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
