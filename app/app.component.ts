import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { FormComponent } from './form/form.component';
import { QuestionBase } from './Models/question-based';
import { QuestionService } from './Services/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent {
  title = 'dynamicForm';
  payload;
  
  @ViewChild('template') template: FormComponent

  questions$: Observable<QuestionBase<string>[]>;
  questions2$: Observable<QuestionBase<any>[]>;

  constructor(private service: QuestionService) {
    this.questions$ = service.getPersonalInfoFields();
    this.questions2$ = service.getEducInfoFields();
  }

  onSubmit() {
    this.template.onSubmit();
    this.payload = this.template.payload;
  }
}
