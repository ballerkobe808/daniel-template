import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'material-login-page',
  templateUrl: './material-login.component.html',
  styleUrls: ['./material-login.component.css']
})
export class MaterialLoginComponent {

  // form controls
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;  // whether to show the password or not

  constructor(
    private router: Router)
  {}

  

  /**
   * Reusable Error message to display for inputs
   */
  getErrorMessage(control) {
    return control.hasError('required') ? 'You must enter a value' :
    control.hasError('email') ? 'Not a valid email' :
      '';
  }


  /**
   * Login to the app
   */
  login() {
    this.router.navigate(['material'])
  }

}











