import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.template.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public showValidationsError: boolean = false;
  public emailAddress: string = '';
  public password: string = '';

  public valdiateCredentials() {
    const emailRegEx = /\S+@\S+\.\S+/;

    this.showValidationsError = !(this.password.length < 6 || emailRegEx.test(this.emailAddress));
  }
}
