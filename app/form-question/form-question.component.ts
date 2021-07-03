import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../Models/question-based';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css']
})
export class FormQuestionComponent implements OnInit {

  @Input() question: QuestionBase<string>;
  @Input() form : FormGroup;


  constructor() { }

  ngOnInit(): void {
  }

  get isValid(){
    return this.form.controls[this.question.key].valid;
  }

}
