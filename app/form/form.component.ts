import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../Models/question-based';
import { QuestionControlService } from '../Services/question-control.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [QuestionControlService]
})
export class FormComponent implements OnInit {
  

  @Input() questions: QuestionBase<string>[] = [];

  form: FormGroup;
  payload: string = '';


  constructor(private controlService: QuestionControlService) { }

  ngOnInit(): void {
    this.form = this.controlService.toFormGroup(this.questions)
  }

  // to get form's value
  onSubmit(){
    this.payload = this.form.value;
  }
}
