import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formSubmitted = false;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  get l(): any {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
  }

  loginNow(): void {
    this.formSubmitted = true;

    if(this.loginForm.invalid) {
      return;
    }

    console.log(this.loginForm.value);
  }

}
