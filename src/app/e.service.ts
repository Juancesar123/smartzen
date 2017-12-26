import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/operator/map";
@Injectable()
export class EService {

  constructor(public http: Http) {
   
   }
   GetData ():Observable<any[]>{
    return this.http.get('http://localhost:3030/dataprovinsi').map(result => result.json());
  }
  SaveData(data){
    //let body = JSON.stringify(data);
    return this.http.post('http://localhost:3030/dataprovinsi',data);
  }
  UpdateData(data,id){
    //let body = JSON.stringify(data);
    return this.http.patch('http://localhost:3030/dataprovinsi/'+id,data);
  }
  DeleteData(id){
    return this.http.delete('http://localhost:3030/dataprovinsi/'+id);
  }
}
