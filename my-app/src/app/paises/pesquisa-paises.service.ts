import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from './pais';

@Injectable({
  providedIn: 'root'
})
export class PesquisaPaisesService {
  baseUrl:string = 'https://restcountries.eu/rest/v2/lang/'

  /* 
  shortcut dizendo que estamos recebendo a variável como parâmetro
  e que ela se tornará uma variável interna
  */
  constructor(private http: HttpClient) {

  }

  public ListarPaises(langCode: string){
    return this.http.get<Pais[]>(this.baseUrl + langCode)
  }
}
