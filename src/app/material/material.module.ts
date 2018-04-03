import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {FormBuilder, FormGroup} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Third party libraries
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';

// Angular material

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // needed for angular material


// import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MatAutocompleteModule, MatInputModule,MatFormFieldModule } from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';








import { MaterialComponent } from './material.component';
import { MaterialLoginComponent } from './login/material-login.component';


@NgModule({
  declarations: [
    MaterialComponent,
    MaterialLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,


    // angular material imports
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,


  ],
  providers: [],
})
export class MaterialModule { }
