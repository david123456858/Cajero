import { Component, OnInit } from '@angular/core';
import { setKey } from 'src/app/service/key.dinamic';
import { getCurrentUser } from 'src/app/service/user.data';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  Option: boolean = false;
  showInfoBox: boolean = false; // Controla la visibilidad del cuadro
  dynamicCode: string = '';
  copied: boolean = false;
  stateKey!: boolean ;
  user: any;


  Options(value: boolean) {
    this.Option = value;
  }
  
  ngOnInit(): void {
    this.dateUser();
  }

  dateUser() {
    this.user = getCurrentUser();
    console.log(this.user.mesagge.saldo);
    this.generateDynamicCode();
  }
  
  generateDynamicCode() {
    if(this.user.mesagge.type === 'NEQUI'){
      this.showInfoBox = true; // Hace visible el cuadro
    }
    // Genera una clave aleatoria de 6 dígitos
    this.dynamicCode = Math.floor(100000 + Math.random() * 900000).toString();
    this.stateKey = true

    setKey(this.dynamicCode)

    setTimeout(() => {
      this.showInfoBox = false; // Oculta el cuadro después de 10 segundos
      this.generateDynamicCode()
    }, 30000);
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.dynamicCode).then(() => {
      this.copied = true; // Indica que la clave fue copiada
      setTimeout(() => (this.copied = false), 2000); // Muestra el estado de copiado por 2 segundos
    });
  }
}
