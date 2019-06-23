import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IlanlarComponent } from './compenents/ilanlar/ilanlar.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterComponent } from './compenents/register/register.component';
import { componentFactoryName } from '@angular/compiler';
import { LoginComponent } from './compenents/login/login.component';
import { NewIlanComponent } from './compenents/new-ilan/new-ilan.component';

@NgModule({
  declarations: [
    AppComponent,
    IlanlarComponent,
    NavComponent,
    SidebarComponent,
    RegisterComponent,
    LoginComponent,
    NewIlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot([
      {path:'',component:IlanlarComponent},
      {path:'otomobil',component:IlanlarComponent},
      {path:'telefon',component:IlanlarComponent},
      {path:'ev',component:IlanlarComponent},
      {path:'diger',component:IlanlarComponent},
      {path:'kayıt',component:RegisterComponent},
      {path:'giris',component:LoginComponent},
      {path:'ilanekle',component:NewIlanComponent}
      

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
