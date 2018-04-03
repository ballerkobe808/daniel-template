import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  showLoading: boolean = false;
  errorMsg: string;
  loginForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    });
  }

/**
   * Login to the app
   */
  login() {
    this.router.navigate(['material'])
  }

}