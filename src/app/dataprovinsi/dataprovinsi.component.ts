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
    return this.dataprovinsiservice.getdata().subscribe((result)=>this.dataprovinsi = result.data);    
  }
  simpan(){
    let data = {"namaprovinsi":this.namaprovinsi};
    this.dataprovinsiservice.simpandata(data).subscribe(val =>{
        alert("data sukes di input");
    })
  }
  ubahdata(item){
    let data = {"namaprovinsi":this.namaprovinsi};
    let id = this.id;
    this.dataprovinsiservice.ubahdata(data,id).subscribe(val =>{
        alert('data sukses di ubah')
        this.getdata();
    })
  }
  hapusdata(item){
    let id = item.id;
    this.dataprovinsiservice.hapusdata(id).subscribe(val =>{
      alert('data sukses di hapus');
      this.getdata();
    })
  }
  edit(item){
    this.id = item.id;
    this.namaprovinsi = item.namaprovinsi;
  }
}
