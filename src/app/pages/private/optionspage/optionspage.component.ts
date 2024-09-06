import { Component, EventEmitter, Output } from '@angular/core';
import { setCurrentMonto } from 'src/app/service/monto';

@Component({
  selector: 'app-optionspage',
  templateUrl: './optionspage.component.html',
  styleUrls: ['./optionspage.component.css'],
})
export class OptionspageComponent {
  @Output() changeState = new EventEmitter<boolean>();
  selectedAmount: number | null = null;
  Option: boolean = false;
  isModalOpen = false
  customAmount: number | null = null;  // Cantidad personalizada

  close() {
    this.changeState.emit(false);
  }

  selectAmount(amount: number) {
    this.selectedAmount = amount; // Guarda la cantidad seleccionada
    this.customAmount = null;
  }

  resetSelection() {
    this.selectedAmount = null; // Deselecciona cualquier cantidad cuando se escribe en el input
  }

  isActive(amount: number): boolean {
    return this.selectedAmount === amount; // Verificamos si es el monto activo
  }

  Options(value: boolean) {
    this.Option = value;
  }

  openModal() {
    if (this.selectedAmount || this.customAmount) {
      if (0 == this.customAmount as number % 10000) {
        console.log('digitos', this.customAmount)
        setCurrentMonto(this.customAmount)
        this.isModalOpen = true;
      }else{
        alert('No es multiplo de 10')
      } 
      setCurrentMonto(this.selectedAmount)
    } else {
      alert('Por favor seleccione o ingrese una cantidad.');
      return
    }
  }
}
