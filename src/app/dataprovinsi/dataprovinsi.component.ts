import { EService } from './../e.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dataprovinsi',
  templateUrl: './dataprovinsi.component.html',
  styleUrls: ['./dataprovinsi.component.css'],
  providers:[EService],
  encapsulation: ViewEncapsulation.None
})
export class DataprovinsiComponent implements OnInit {
dataprovinsi;
namaprovinsi;
id;
  constructor(public dataprovinsiservice:EService) { }
  ngOnInit() {
    this.getdata();
  }
  getdata(){
    return this.dataprovinsiservice.GetData().subscribe((result)=>this.dataprovinsi = result );    
  }
  ButtonSaveData(){
    let data = {"namaprovinsi":this.namaprovinsi};
    this.dataprovinsiservice.SaveData(data).subscribe(val =>{
        alert("data sukes di simpan");
        this.getdata();
    })
  }
  ButtonUpdateData(item){
    let data = {"namaprovinsi":this.namaprovinsi};
    let id = this.id;
    this.dataprovinsiservice.UpdateData(data,id).subscribe(val =>{
        alert('data sukses di ubah')
        this.getdata();
    })
  }
  ButtonDeleteData(item){
    let id = item.id;
    this.dataprovinsiservice.DeleteData(id).subscribe(val =>{
      alert('data sukses di hapus');
      this.getdata();
    })
  }
  UpdateData(item){
    this.id = item.id;
    this.namaprovinsi = item.namaprovinsi;
  }
}
