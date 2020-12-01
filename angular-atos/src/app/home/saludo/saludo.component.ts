import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ato-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  user: string;
  mensaje: string;
  constructor() { }

  ngOnInit(): void {
    this.mensaje = 'Dime tu nombre';
    this.user = 'Ainhoa';
  }
onBorrar(ev: Event): void{
  console.log(ev);
  console.log(this.user);
  this.user ='';
  console.log(this.user);

}
}
