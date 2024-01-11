import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currency } from '../models/const/currency';
@Injectable({
  providedIn: 'root'
})
export class CurrencyServices {
  getAllCurrencyUrl : string = 'https://v6.exchangerate-api.com/v6/95539951db2702fc3a8b2fa7/latest/EUR';

  item : Currency = {
    result : '',
    documentation :'',
    terms_of_use  :  '',
    time_last_update_unix :  0,
    time_last_update_utc : '',
    time_next_update_unix: 0,
    time_next_update_utc : '',
    base_code: '',
    conversion_rates:{ key: '', value: 0},
  }
  constructor(  private http: HttpClient,) { }


  getAllItems(): Observable<any> {
    return this.http.get<any>(this.getAllCurrencyUrl,
    );
  }
}
