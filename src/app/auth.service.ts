import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userdata = new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient , private _Router:Router) {

    if(localStorage.getItem('userToken') !=null)
    {
      this.setUserData();
    }
  }


  setUserData():void
  {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any = jwtDecode(encodedToken);
    this.userdata.next(decodedToken);

  }


  register(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup' , userData)
  }

  login(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin' , userData)
  }


  logout()
  {
    localStorage.removeItem('userToken');
    this.userdata.next(null);
     this._Router.navigate(['/login'])
  }
}
