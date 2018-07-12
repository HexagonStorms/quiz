import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  cQ: number;
  enum_details: [
    {
      name: 'test',
      value: ""
    },
    {
      name: 'test2',
      value: ""
    }
  ];

  constructor(private quiz: QuizService) {
    this.quiz = quiz;
    this.cQ = this.quiz.currentQuestion; 
  }

  ngOnInit() {
  }

}
