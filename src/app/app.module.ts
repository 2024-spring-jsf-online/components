import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReiAdditionComponent } from './rei-addition/rei-addition.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle'

@NgModule({
  declarations: [
    AppComponent
    , PizzaToppingsComponent, ReiAdditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , FormsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    ,MatButtonToggleModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
