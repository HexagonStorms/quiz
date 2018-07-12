import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  test = 'hello!!! i am inside the service';
  currentQuestion: number = 1;

  myFunction() {
    
  }

  questions = [
    {
      id: 1,
      name: 'Choose a space vehicle',
      choices: [
        {
          name: 'Millenium Falcon',
          value: 1,
          selected: false,
        },
        {
          name: 'TIE Fighter',
          value: 2,
          selected: false,
        },
        {
          name: 'The Enterprise',
          value: 3,
          selected: false,
        },
        {
          name: 'Magic Schoolbus',
          value: 0,
          selected: false,
        },
        {
          name: 'X-Wing',
          value: 4,
          selected: false,
        }
      ],
    },
    {
      id: 2,
      name: 'Choose Your Pilot',
      choices: [
        {
          name: 'Jack Sparrow',
          value: 0,
          selected: false,
        },
        {
          name: 'Han Solo',
          value: 1,
          selected: false,
        },
        {
          name: 'Quagmire',
          value: 2,
          selected: false,
        },
        {
          name: 'Davy Jones, The Flying Dutchman',
          value: 3,
          selected: false,
        }
      ],
    }
  ];

  constructor() { }
}
