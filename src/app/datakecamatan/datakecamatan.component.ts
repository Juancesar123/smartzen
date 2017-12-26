import { DatakotaService } from './../datakota.service';
import { EService } from './../e.service';
import { DatakecamatanService } from './../datakecamatan.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Response } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/Rx';
import {IndexedDBAngular} from'indexeddb-angular';
@Component({
  selector: 'app-datakecamatan',
  templateUrl: './datakecamatan.component.html',
  styleUrls: ['./datakecamatan.component.css'],
  providers:[DatakecamatanService,EService,DatakotaService],
  encapsulation: ViewEncapsulation.None
})
export class DatakecamatanComponent implements OnInit {
  dataprovinsi:any;
  namaprovinsi :String;
  DataDumpCity:any;
  KecamatanData:any;
  namakota:String;
  namakecamatan:String;
  datakecamatan:any;
  id:string;
  private db = new IndexedDBAngular('myDb', 1);
  constructor(public DataProvince:EService,public DataKecamatan:DatakecamatanService,public DataCity :DatakotaService) {
    this.GetDataProvince();
    this.GetData();
   }
   createCollections(db) {
    db.currentTarget.result.createObjectStore('exampleCollection1');
    db.currentTarget.result.createObjectStore('exampleCollection2');
    db.add('people', { name: 'name', email: 'email' }).then(() => {
      // Do something after the value was added 
  }, (error) => {
      console.log(error);
    });
  }
  ChangeOptionGet(){
    let nama = this.namaprovinsi;
    this.DataCity.GetSpesificdata(nama).subscribe((result)=> this.DataDumpCity = result);
  }
  GetDataProvince(){
    this.DataProvince.GetData().subscribe((result) => this.dataprovinsi = result)
  }
  SaveData(){
    let data = {"datakotaId":this.namakota,"namakecamatan":this.namakecamatan}
    this.DataKecamatan.SavedData(data).subscribe(val => {
      alert('data sukses di simpan');
      this.GetData();
    })
  }
  GetData(){
    this.DataKecamatan.GetDataKecamatan().subscribe((result) => this.datakecamatan = result);
  }
  EditForm(item){
    this.namakecamatan = item.namakecamatan;
    this.namakota = item.datakotaId;
    this.namaprovinsi = item.datakotum.dataprovinsiId;
    this.id = item.id;
  }
  ActionEdit(){
    let data = {"datakotaId":this.namakota,"namakecamatan":this.namakecamatan}
    let id = this.id;
    this.DataKecamatan.UpdateData(data,id).subscribe(val => {
      alert('data sukses di ubah');
      this.GetData();
    })
  }
  DeleteData(item){
    let id = item.id;
    this.DataKecamatan.DeletedData(id).subscribe(val =>{
      alert('data sukses di hapus');
      this.GetData();
    })
  }
  ngOnInit() {
    this.db.createStore(1, this.createCollections)
  }
}
