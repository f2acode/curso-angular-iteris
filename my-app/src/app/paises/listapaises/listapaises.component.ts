import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listapaises',
  templateUrl: './listapaises.component.html',
  styleUrls: ['./listapaises.component.css']
})
export class ListapaisesComponent implements OnInit {
  listaPaises:string[]

  constructor() { }

  ngOnInit() {
    this.listaPaises = ['Brasil', 'Argentina', 'México'];
  }

}
