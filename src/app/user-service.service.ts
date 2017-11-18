import { userModel } from './userModel';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/operator/map";
import { HttpClient,HttpHeaders,} from '@angular/common/http';
@Injectable()
export class UserServiceService {


  constructor(public http: HttpClient) {
    
  }
  getdata () : Observable<userModel[]>{
    // const httpOptions = {
    //   headers: new HttpHeaders({'Authorization':localStorage.getItem('token')})
    // }
    return this.http.get<userModel[]>("http://localhost:3030/users");
  }
}
