import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DatakotaService {

  constructor(public http:HttpClient) { }
  GetData(){
    return this.http.get('http://localhost:3030/datakota');
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
}
