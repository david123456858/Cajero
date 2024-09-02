import { IUserLoggin } from './../interface/user.interface';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class ServicesUser{

    loginUrl:string = 'http://localhost:3004/api/v1/loggin'
    user:IUserLoggin = new IUserLoggin()

    constructor(private http:HttpClient){
    }

    login(user:IUserLoggin): Observable<any> {
        return this.http.post(this.loginUrl,user);
      }
}