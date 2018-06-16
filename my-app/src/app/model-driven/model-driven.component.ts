import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, } from '@angular/forms'

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  pageForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.pageForm = this.fb.group({
      /* 
      posições dos validadores:
      0 - conteúdo padrão
      1 - validadores síncronos
      2 - validadores assícronos
      nos últimos dois casos, para passar mais de 1 é necessário colocar um array
      */
      nome: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

}
