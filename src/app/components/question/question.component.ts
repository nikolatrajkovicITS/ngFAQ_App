import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'app/models/question-model';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input('question') question: Question;

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  removeQuestion(question) {
    this.dataService.removeQuestion(question);
  }
}
