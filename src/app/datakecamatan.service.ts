import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class DatakecamatanService {

  constructor(public http:Http) {

   }
   GetDataKecamatan():Observable<any[]>{
     return this.http.get('http://localhost:3030/datakecamatan').map(res => res.json().data);
   }
   SavedData(data){
     return this.http.post('http://localhost:3030/datakecamatan',data);
   }
   DeletedData(id){
     return this.http.delete('http://localhost:3030/datakecamatan/'+id);
   }
   UpdateData(data,id){
     return this.http.put('http://localhost:3030/datakecamatan/'+id,data);
   }
}
