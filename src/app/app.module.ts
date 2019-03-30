import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SaymonComponent } from './saymon/saymon.component';

import { PaAttrDirective } from "./saymon/attr.directive";
 

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({

  declarations: [
    AppComponent,
    
    SaymonComponent,
    PaAttrDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [SaymonComponent]
})
export class AppModule { }


 