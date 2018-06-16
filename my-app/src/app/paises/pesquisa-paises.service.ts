import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class PesquisaPaisesService {

  /* 
  shortcut dizendo que estamos recebendo a variável como parâmetro
  e que ela se tornará uma variável interna
  */
  constructor(private http: HttpClient) {

  }
}
