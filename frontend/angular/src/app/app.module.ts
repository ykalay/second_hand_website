import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IlanlarComponent } from './compenents/ilanlar/ilanlar.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterComponent } from './compenents/register/register.component';
import { componentFactoryName } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    IlanlarComponent,
    NavComponent,
    SidebarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:IlanlarComponent},
      {path:'otomobil',component:IlanlarComponent},
      {path:'telefon',component:IlanlarComponent},
      {path:'ev',component:IlanlarComponent},
      {path:'diger',component:IlanlarComponent}
      

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
