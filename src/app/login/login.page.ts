import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: any;
  loginOk: boolean;
  email: string;
  clave: string;


  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  public doLogin() {
    if (this.loginForm.valid) {
      this.loginOk = true;
      this.email = this.loginForm.value.email;
      this.clave = this.loginForm.value.clave;
    }

  }

  ngOnInit() {
  }

}

