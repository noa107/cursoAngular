import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludoComponent } from './saludo/saludo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SaludoRefComponent } from './saludo-ref/saludo-ref.component';
import { SaludoRxComponent } from './saludo-rx/saludo-rx.component';



@NgModule({
  declarations: [SaludoComponent, SaludoRefComponent, SaludoRxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],

exports: [SaludoComponent, SaludoRefComponent, SaludoRxComponent]
})
export class HomeModule { }
