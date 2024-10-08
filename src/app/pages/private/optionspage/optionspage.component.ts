import { Component, EventEmitter, Output } from '@angular/core';
import { setBilletes } from 'src/app/service/billetes';
import { sacarVectorBillete } from 'src/app/service/logicaCajero';
import { getCurrentMonto, setCurrentMonto } from 'src/app/service/monto';

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
  vectorResul!:number[]

  close() {
    this.changeState.emit(false);
  }

  selectAmount(amount: number) {
    this.selectedAmount = amount; // Guarda la cantidad seleccionada
    this.customAmount = null;
  }

  resetSelection(amount:number | null) {
    this.selectedAmount = null;
    this.customAmount = amount // Deselecciona cualquier cantidad cuando se escribe en el input
  }

  isActive(amount: number): boolean {
    return this.selectedAmount === amount; // Verificamos si es el monto activo
  }

  Options(value: boolean) {
    this.Option = value;
  }

  openModal() {
    if (this.selectedAmount || this.customAmount) {
      if (0 === this.customAmount as number % 10000) {
        this.vectorResul = sacarVectorBillete(this.customAmount as number)
        setBilletes(this.vectorResul)
        this.isModalOpen = true;
      }else{
        alert('No es multiplo de 10.000')
      } 
      if(this.selectedAmount){
        this.vectorResul = sacarVectorBillete(this.selectedAmount as number)
        setBilletes(this.vectorResul)
        this.selectCustom(this.selectedAmount)
      }
      setCurrentMonto(this.customAmount)
    } else {
      alert('Por favor seleccione o ingrese una cantidad.');
      return
    }
  }

  selectCustom(num:number){
    setCurrentMonto(num)
  }
}
