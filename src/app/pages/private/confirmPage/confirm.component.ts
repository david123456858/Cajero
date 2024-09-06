import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-code-confirmation-modal',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class CodeConfirmationModalComponent {
  @Output() changeState = new EventEmitter<boolean>();
  isModalOpen = true;  // Cambiar a `true` cuando quieras abrir el modal
  remainingTime = 30;  // Tiempo inicial de 30 segundos
  enteredCode: string = '';  // Código ingresado por el usuario
  generatedCode: string = ''; // Código generado dinámicamente

  constructor() {
    this.startTimer();
   // Genera el código dinámico al iniciar
  }

  // Método para iniciar el temporizador
  startTimer() {
    const interval = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime <= 0) {
        clearInterval(interval);
        alert('Transaccion cancelada')
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
}
