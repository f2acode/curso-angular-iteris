import { Component, OnInit } from '@angular/core'
import { PesquisaPaisesService } from '../pesquisa-paises.service'
import { Observable } from 'rxjs'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-listapaises',
  templateUrl: './listapaises.component.html',
  styleUrls: ['./listapaises.component.css']
})
export class ListapaisesComponent implements OnInit {
  listaPaises: string[]
  lang: string

  constructor(private service: PesquisaPaisesService) { }

  ngOnInit() {
    this.listaPaises = []
  }

  public updateLista() {
    this.service
      .ListarPaises(this.lang).subscribe(
        (lista) => (
          lista.forEach(v => {
            this.listaPaises.push(v.name)
          })
        )
      )
  }

}
