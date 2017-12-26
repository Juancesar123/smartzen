import { HttpClient,HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { appRouterModule } from "./app.routes";
import { HomedashboardComponent } from './homedashboard/homedashboard.component';
import { DataprovinsiComponent } from './dataprovinsi/dataprovinsi.component';
import { DatakotaComponent } from './datakota/datakota.component';
import { DatakecamatanComponent } from './datakecamatan/datakecamatan.component';
import { DatakelurahanComponent } from './datakelurahan/datakelurahan.component';
import { DatartComponent } from './datart/datart.component';
import { DatarwComponent } from './datarw/datarw.component';
import { DatawargaComponent } from './datawarga/datawarga.component';
import { DaftarkeluhanComponent } from './daftarkeluhan/daftarkeluhan.component';
import { BeritaacaraComponent } from './beritaacara/beritaacara.component';
import { LaporanwargaComponent } from './laporanwarga/laporanwarga.component';
import { LaporankasmasukComponent } from './laporankasmasuk/laporankasmasuk.component';
import { LaporankaskeluarComponent } from './laporankaskeluar/laporankaskeluar.component';
import { IntegratedcctvComponent } from './integratedcctv/integratedcctv.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HeaderComponent,
    SidemenuComponent,
    FooterComponent,
    UsersComponent,
    HomedashboardComponent,
    DataprovinsiComponent,
    DatakotaComponent,
    DatakecamatanComponent,
    DatakelurahanComponent,
    DatartComponent,
    DatarwComponent,
    DatawargaComponent,
    DaftarkeluhanComponent,
    BeritaacaraComponent,
    LaporanwargaComponent,
    LaporankasmasukComponent,
    LaporankaskeluarComponent,
    IntegratedcctvComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    HttpModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
