import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { QuestionBase } from "../Models/question-based";



@Injectable()
export class QuestionControlService {
    toFormGroup(question: QuestionBase<string>[]){
        const group: any = {};

        question.forEach(question => {
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
            : new FormControl(question.value || '');
        })

        return new FormGroup(group);
    }
}