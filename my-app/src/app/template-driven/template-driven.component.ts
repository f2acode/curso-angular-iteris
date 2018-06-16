import { Component, OnInit } from '@angular/core';
import { FormModel } from './form-model';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  model: FormModel

  constructor() {
    this.model = new FormModel()
  }

  ngOnInit() {
  }

}
