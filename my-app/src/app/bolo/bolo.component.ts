import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bolo',
  templateUrl: './bolo.component.html',
  styleUrls: ['./bolo.component.css']
})
export class BoloComponent implements OnInit {
  listaBolos:string[] = ['Abacaxi', 'Chocolate Branco', 'Beijinho'];

  constructor() { }

  ngOnInit() {
  }

}
