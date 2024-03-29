import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/const/user';
import { Root } from '../models/const/root';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAllUsersUrl : string = 'https://localhost:7257/api/User';

  constructor(  private http: HttpClient,) { }

  getAllUsers(): Observable<Array<Root>> {
    return this.http.get<any>(this.getAllUsersUrl)
  }



}
