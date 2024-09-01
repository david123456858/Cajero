import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero:number = 0
  saldo:number = 500000
  
  title = 'Cajero';
  constructor(){
   
  }

  aumentar(){
    this.saldo = this.saldo + this.numero
  }
}
