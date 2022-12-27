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
import { IntroComponent } from './components/intro/intro.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    ImagecomponentComponent,
    EmpInfoComponent,
    FormCompComponent,
  
    NavbarComponent,
    IntroComponent,
    CoursesComponent,
    FooterComponent
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
