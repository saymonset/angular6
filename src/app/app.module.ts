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

import { PaAddTaxPipe } from "./saymon/addTax.pipe";

import { PaCategoryFilterPipe } from "./saymon/categoryFilter.pipe";
import { LOCALE_ID } from "@angular/core";
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFr);
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
    PaToggleView,
    PaAddTaxPipe,
    PaCategoryFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
 // providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [SaymonComponent]
})
export class AppModule { }


 