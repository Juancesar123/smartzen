//import { Observable } from 'rxjs/Observable';
import { Datakotamodel } from './Datakotamodel';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/Rx';
@Injectable()
export class DatakotaService {

  constructor(public http:Http) { }
  GetData():Observable<any[]>{
    return this.http.get('http://localhost:3030/datakota').map(res => res.json());
  }
  SavedData(data){
    return this.http.post('http://localhost:3030/datakota',data);
  }
  UpdateData(data,id){
    return this.http.patch('http://localhost:3030/datakota/'+id,data);
  }
  DeleteData(id){
    return this.http.delete('http://localhost:3030/datakota/'+id);
  }
  GetSpesificdata(nama):Observable<any[]>{
    return this.http.get('http://localhost:3030/datakota?dataprovinsiId='+nama).map(res =>res.json());
  }
}
