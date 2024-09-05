import { Component, OnInit } from '@angular/core';
import { getCurrentUser } from 'src/app/service/user.data';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  Option: boolean = false;
  
  user:any
  Options(value: boolean){
    this.Option = value;
  }
  
  dateUser(){
    this.user = getCurrentUser()
    console.log(this.user.mesagge.saldo)
  }

  ngOnInit(): void {
    this.dateUser()
  }
}
