import { HttpClient,HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HeaderComponent,
    SidemenuComponent,
    FooterComponent,
    UsersComponent,
    HomedashboardComponent,
    DataprovinsiComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    DataTablesModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
