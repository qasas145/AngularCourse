import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword : boolean = false;
  loginForm : FormGroup = new FormGroup({
    email : new FormControl(null, [Validators.required,Validators.email]),
    password : new FormControl(null, [Validators.minLength(3), Validators.required])
  });
  submitForm(form : FormGroup){
    console.log(form);
    console.log('the form has been submitted sucessfully');
  }
  displayPassword() {
    this.showPassword=!this.showPassword;
  }
}
