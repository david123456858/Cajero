import { Component } from '@angular/core';

@Component({
  selector: 'app-home-login',
  templateUrl: './homeLogin.component.html',
  styleUrls: ['./homeLogin.component.css'],
})
export class HomeLoginComponent {
  homepage: boolean = true;
  loginpage: boolean = false;

  accesslogin(){
    this.homepage = false;
    this.loginpage = true;
  }
 }
