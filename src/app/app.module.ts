import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { FormCompComponent } from './form-comp/form-comp.component';
import {FormsModule} from "@angular/forms";

import { NavbarComponent } from './components/navbar/navbar.component';



import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    ImagecomponentComponent,
    EmpInfoComponent,
    FormCompComponent,
  
    NavbarComponent,

 
  
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
