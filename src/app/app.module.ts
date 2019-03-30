import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SaymonComponent } from './saymon/saymon.component';
 

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({

  declarations: [
    AppComponent,
    
    SaymonComponent
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


 