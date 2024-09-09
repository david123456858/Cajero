import { Component, OnInit } from '@angular/core';
import { UserBalance } from 'src/app/interface/userBalance.inteface';
import { AppBalanceService } from 'src/app/service/app.balance.service';
import { getBilletes } from 'src/app/service/billetes';
import { sacarVectorBillete } from 'src/app/service/logicaCajero';
import { getCurrentMonto, getCurrentMontoSelect } from 'src/app/service/monto';
import { getCurrentUser } from 'src/app/service/user.data';

@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.component.html',
  styleUrls: ['./invoice-page.component.css']
})
export class InvoicePageComponent implements OnInit {
  user:any  
  userUpdate :UserBalance = new UserBalance()
  vectorBilletes!:number[]

  ngOnInit(): void {
    this.user = getCurrentUser()
    this.accountType = this.user.mesagge.type
    this.previousBalance = this.user.mesagge.saldo
    this.withdrawalAmount = getCurrentMonto() ?? getCurrentMontoSelect()
    this.currentBalance= this.previousBalance - this.withdrawalAmount;
    this.vectorBilletes = getBilletes()
  }
  constructor(private service:AppBalanceService){

  }
  currentDate: string = new Date().toLocaleDateString();
  transactionNumber: string = this.generateTransactionNumber();
  accountType: string = ''; // o 'Bancolombia', por ejemplo
  previousBalance: number = 0; // saldo anterior
  withdrawalAmount: number = 0; // monto retirado
  currentBalance: number = 0

  // Método para generar un número de transacción único
  generateTransactionNumber(): string {
    return Math.floor(Math.random() * 1000000000).toString();
  }

  // Método para imprimir la factura
  printInvoice() {
    window.print();
  }

  updateBalance(){
    this.userUpdate.phoneNumber = this.user.mesagge.phoneNumber
    this.userUpdate.saldo = this.user.mesagge.saldo
    this.userUpdate.type = this.user.mesagge.type
    this.service.update(this.userUpdate).subscribe((res)=>{
      console.log('Se ha llevado a cabo el cambio')
    })
  }
}
