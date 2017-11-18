import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/operator/map";
@Injectable()
export class EService {

  constructor(public http: HttpClient) {
   
   }
   getdata (){
    return this.http.get('http://localhost:3030/dataprovinsi');
  }
  simpandata(data){
    //let body = JSON.stringify(data);
    return this.http.post('http://localhost:3030/dataprovinsi',data);
  }
  ubahdata(data,id){
    //let body = JSON.stringify(data);
    return this.http.patch('http://localhost:3030/dataprovinsi/'+id,data);
  }
  hapusdata(id){
    return this.http.delete('http://localhost:3030/dataprovinsi/'+id);
  }
}
