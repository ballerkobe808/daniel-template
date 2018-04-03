import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'material-page',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {

  // Form field with label
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });

    // Form field theming
    this.options2 = fb.group({
      'color': 'primary',
      'fontSize': [16, Validators.min(10)],
    });
  }



  // Form field with error messages
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
      '';
  }



  //Form field with prefix & suffix
  hide = true;


  // Form field theming
  options2: FormGroup;

  getFontSize() {
    return Math.max(10, this.options2.value.fontSize);
  }




}











