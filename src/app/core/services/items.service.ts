import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../../core/models/const/item';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getAllItemsUrl : string = 'http://localhost:3000/items/';

  item : Item = {
    id:0,
    "dateUpdate":  '',
    "user": '',
    "currFrom": '',
    "currTo": '',
    "value": '',
    "valueConvert": '',
  }
  constructor(  private http: HttpClient,) { }

  getAllItems(): Observable<Array<Item>> {
    return this.http.get<any>(this.getAllItemsUrl)
  }

  addItems(item: Item): Observable<any> {
    return this.http.post<any>(this.getAllItemsUrl , item)
  }
}
