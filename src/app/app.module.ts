import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SaymonComponent } from './saymon/saymon.component';

import { PaAttrDirective } from "./saymon/attr.directive";
 

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PaModel } from "./saymon/twoway.directive";


import { PaStructureDirective } from "./saymon/structure.directive";

import { PaIteratorDirective } from "./saymon/iterator.directive";

import { PaCellColor } from "./saymon/cellColor.directive";

import { PaCellColorSwitcher } from "./saymon/cellColorSwitcher.directive";

import { ProductTableComponent } from "./saymon/productTable.component";

import { ProductFormComponent } from "./saymon/productForm.component";

import { PaToggleView } from "./saymon/toggleView.component";


@NgModule({

  declarations: [
    AppComponent,
    
    SaymonComponent,
    PaAttrDirective,
    PaModel,
    PaStructureDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,
    ProductTableComponent,
    ProductFormComponent,
    PaToggleView
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


 