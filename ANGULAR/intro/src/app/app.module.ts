import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"; //per il two-way binding

import { AppComponent } from './app.component';
import { IntestComponent } from './intest/intest.component';
import { BindingComponent } from './binding/binding.component';


@NgModule({
  declarations: [
    AppComponent,
    IntestComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //per il two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
