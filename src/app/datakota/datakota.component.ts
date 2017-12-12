import { EService } from './../e.service';
import { DatakotaService } from './../datakota.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-datakota',
  templateUrl: './datakota.component.html',
  styleUrls: ['./datakota.component.css'],
  providers:[DatakotaService,EService],
  encapsulation: ViewEncapsulation.None
})
export class DatakotaComponent implements OnInit {
 dataprovinsi:any;
 datakota:any;
 namaprovinsi:string;
 namakota:string;
 id:string;

  constructor(public CityApiService:DatakotaService,public ProvinceApiService:EService) { 
    this.GetDataProvince();
    this.Getdatacity();
  }

  ngOnInit() {

  }
  /*
    Function for action button saved data Province in datakota.component.html
  */
  /*
    fungsi untuk tombol simpan data provinsi di datakota.component.html
  */
  SavedData(){
    let data = {"dataprovinsiId" : this.namaprovinsi, "nama_kota":this.namakota};
    this.CityApiService.SavedData(data).subscribe(val =>{
      alert("data sukses di simpan");
      this.Getdatacity();
    })
  }
  /*
    Function for get data province use into combobox in view datakota.component.html 
  */
  /*
    Fungsi digunakan untuk mengambil data provinsi yang akan di gunakan di dalam combobox di view
    datakota.component.html
  */
  GetDataProvince(){
    this.ProvinceApiService.GetData().subscribe((result)=>this.dataprovinsi = result);
  }
  UpdateFormList(item){
    this.namaprovinsi = item.dataprovinsiId;
    this.namakota = item.nama_kota;
    this.id = item.id;
  }
  UpdateData(){
    let data = {"id_provinsi" : this.namaprovinsi, "nama_kota":this.namakota};
    let id = this.id; 
    this.CityApiService.UpdateData(data,id).subscribe(val =>{
      alert('data sukses di edit');
      this.Getdatacity();
    })
  }
  /*
    Function for get data City From API and use to table in view datakota.component.html 
  */
  /*
    fungsi yang di gunakan untuk mengambil data kota  dari api yang di gunakan untuk membuat
    table di view datacomponent.html
  */
  Getdatacity(){
    this.CityApiService.GetData().subscribe((result) => this.datakota = result);
  }
  DeleteData(item){
    let id = item.id;
    this.CityApiService.DeleteData(id).subscribe(val =>{
      alert('data berhasil di hapus');
      this.Getdatacity();
    })
  }

}
