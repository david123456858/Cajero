import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-optionspage',
  templateUrl: './optionspage.component.html',
  styleUrls: ['./optionspage.component.css']
})
export class OptionspageComponent {
  @Output() changeState = new EventEmitter<boolean>();
  selectedAmount: number | null = null;

  close(){
    this.changeState.emit(false);
  }

  selectAmount(amount: number) {
    this.selectedAmount = amount;  // Guarda la cantidad seleccionada
  }

  isActive(amount: number): boolean {
    return this.selectedAmount === amount; // Verificamos si es el monto activo
  }
}
