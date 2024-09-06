import { setCurrentUser } from 'src/app/service/user.data';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { getCurrentUser } from 'src/app/service/user.data';
import { getKey } from 'src/app/service/key.dinamic';

@Component({
  selector: 'app-code-confirmation-modal',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class CodeConfirmationModalComponent implements OnInit {
  @Output() changeState = new EventEmitter<boolean>();
  isModalOpen = true;  // Cambiar a `true` cuando quieras abrir el modal
  remainingTime = 30;  // Tiempo inicial de 30 segundos
  enteredCode: string = '';  // Código ingresado por el usuario
  generatedCode: string = ''; // Código generado dinámicamente
  accountType: string = '';  // Tipo de cuenta, puedes cambiar este valor dinámicamente
  user: any;

  constructor() {
    this.startTimer();
  }

  ngOnInit(): void {
    this.user = getCurrentUser()
    console.log(this.user)
    this.accountType = this.user.mesagge.type
    this.generatedCode = this.generateStaticCode();
  }


  // Método para iniciar el temporizador
  startTimer() {
    const interval = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime <= 0) {
        clearInterval(interval);
        alert('Transacción cancelada');
        this.closeModal();  // Cierra el modal cuando el tiempo se acabe
      }
    }, 1000);  // Disminuye el tiempo cada segundo
  }

  verifyCode() {
    if (this.enteredCode === this.generatedCode) {
      alert('Código confirmado correctamente');
      this.closeModal();
    } else {
      alert('Código incorrecto, intente de nuevo');
    }
  }

  // Método para cerrar el modal
  closeModal() {
    this.isModalOpen = false;
  }

  close() {
    this.changeState.emit(false);
  }

  // Método para generar el código estático
  generateStaticCode(): string {
    let code = ''
    console.log(this.accountType);
    
    if(this.accountType === 'BANCOLOMBIA'){
      code = '123456'
      return code
    }
    code = getKey()
    console.log(code);
    return code;  // Puedes cambiar esto para generar un código aleatorio
  }
}

