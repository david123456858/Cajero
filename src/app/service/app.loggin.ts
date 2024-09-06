import {  User } from './../interface/user.interface';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class ServicesUser{

    loginUrl:string = 'https://lmnxjzrh-3004.use2.devtunnels.ms/api/v1/loggin'
    user:User = new User()
 
    constructor(private http:HttpClient){
    } 

   login(user:User): Observable<any> {
    console.log("Esto es entrando al serbvicio: ",user)
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '
      });
       console.log("Esto despues de entrar: ",user);
      
        return this.http.post(this.loginUrl,user, { headers });
      }
}