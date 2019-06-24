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
import { IlanFilterPipe } from './compenents/ilanlar/ilan-filter.pipe';
import { LoginComponent } from './compenents/login/login.component';
import { KbilgiComponent } from './compenents/kbilgi/kbilgi.component';
import { NewIlanComponent } from './compenents/new-ilan/new-ilan.component';;
import { IlanInfoComponent } from './compenents/ilan-info/ilan-info.component'
;
import { UilanComponent } from './compenents/uilan/uilan.component'

@NgModule({
  declarations: [
    AppComponent,
    IlanlarComponent,
    NavComponent,
    SidebarComponent,
    RegisterComponent,
    IlanFilterPipe,
    LoginComponent,
    KbilgiComponent,
    NewIlanComponent
,
    IlanInfoComponent
,
    UilanComponent
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
      {path:'kbilgi',component:KbilgiComponent},
      {path:'ilanekle',component:NewIlanComponent},
      {path:'ilan-info/:id',component:IlanInfoComponent},
      {path:'ilanlarım',component:UilanComponent}
      

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
