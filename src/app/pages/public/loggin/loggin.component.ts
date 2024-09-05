import { ServicesUser } from './../../../service/app.loggin';
import { IUserLoggin, User } from './../../../interface/user.interface';
import { Component } from '@angular/core';
import { setCurrentUser } from 'src/app/service/user.data';


@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css'],
})
export class LogginComponent {
  login: boolean = true;
  main: boolean = false;

  user: IUserLoggin = new IUserLoggin();
  userLoggin: User = new User();

  constructor(private service: ServicesUser) {}

  validateLenghtId(value: string): boolean {
    return value.length !== 10;
  }

  validateLenght(value: string): boolean {
    return value.length >= 4 && value.length <= 6;
  }

  log() {
    const { phoneNumber, passwords, type } = this.user;

    let numberString = phoneNumber.toString();
    let passWordString = passwords.toString();

    if (this.validateLenghtId(numberString)) {
      alert('El numero debe ser almenos 10 numeros');
      return;
    }

    if (!this.validateLenght(passWordString)) {
      console.log(passWordString.length);

      alert('La contraseña debe ser al menos 4 a 6 digitos');
      return;
    }
    console.log(this.user);

    if (type === 'nequi') {
      this.user.type = 'NEQUI';
    } else if (type === 'bancolombia') {
      this.user.type = 'BANCOLOMBIA';
    } else if (type.length === 0) {
      alert('Debe elegir alguna cuenta');
      return;
    }

    // Esto es para tranformar el usuario a lo que pide el back
    this.userLoggin.phoneNumber = numberString;
    this.userLoggin.passwords = passWordString;
    this.userLoggin.type = this.user.type;

    console.log('Esto mandamos', this.userLoggin);
    this.service.login(this.userLoggin).subscribe(
      (response) => {
        this.login = false;
        this.main = true
        setCurrentUser(response)
      },
      (error) => {
        console.error('Error en la solicitud', error);
        
        return alert('la cuenta digata mal o no existe en el sistema ' )
      }
    );

    
  }
}
