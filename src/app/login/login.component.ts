import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.template.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public showValidationsError: boolean = false;
  public emailAddress: string = '';
  public password: string = '';

  constructor(private router: Router) {}

  public valdiateCredentials() {
    const emailRegEx = /\S+@\S+\.\S+/;

    this.showValidationsError = !(this.password.length >= 6 || emailRegEx.test(this.emailAddress));
    // console.log(this.showValidationsError);
  }

  public login() {
    this.valdiateCredentials();
    if (!this.showValidationsError) {
      this.router.navigate(['welcome']);
    }
  }
}
