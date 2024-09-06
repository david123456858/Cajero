import { Injectable } from '@angular/core';
import { UserBalance } from '../interface/userBalance.inteface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppBalanceService {
  updateUrl: string =
    'https://lmnxjzrh-3004.use2.devtunnels.ms/api/v1/update/balance';
  user: UserBalance = new UserBalance();
  constructor(private http: HttpClient) {}

  update(user: UserBalance): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ',
    });
    console.log('Esto despues de entrar: ', user);

    return this.http.put(this.updateUrl, user, { headers });
  }
}
