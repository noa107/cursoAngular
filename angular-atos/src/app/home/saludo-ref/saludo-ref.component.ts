import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ato-saludo-ref',
  templateUrl: './saludo-ref.component.html',
  styleUrls: ['./saludo-ref.component.css']
})
export class SaludoRefComponent implements OnInit {
  @ViewChild('usuario', {static: true}) refUsuario: ElementRef;
  constructor() {
    console.log ('REf en el constructor:', this.refUsuario);
   }

  ngOnInit(): void {
    console.log ('REf en el onInit:', this.refUsuario);
    this.refUsuario.nativeElement.value = 'inicioVar';

  }

}
