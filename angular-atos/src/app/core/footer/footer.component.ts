import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ato-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  author: string;
  hoy: Date;
  constructor() { }

  ngOnInit(): void {
    this.author = 'Ainhoa Sánchez de Pablo';
    this.hoy = new Date();
  }

}
