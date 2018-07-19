import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private router: Router) {
    this.router = router;
  }

  currentQuestion = 0;
  totalResult = 0;

  theTruth: any;

  goPreviousQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
      // Goes to previous question
      this.router.navigate([`/question/${this.currentQuestion}`]);
    } else {
      // Back to Home
      this.router.navigate([`/`]);
    }

  }

  goNextQuestion() {
    // Check to see if they are any more questions
    console.log("BEFORE: " + this.currentQuestion);
    
    if (this.questions.length - 1 > this.currentQuestion ) {
      // Goes to next question
      this.currentQuestion++;
      console.log(this.questions.length, this.currentQuestion);
      this.router.navigate(['/question', this.currentQuestion]);
    } else {
      // No More Questions Left, Calculate Results and Go to Results Page
      this.calculateResult();
      this.router.navigate([`/result`]);
    }
  }

  calculateResult() {

    for (let i = 0; i < this.questions.length; i++) {
      this.totalResult += this.questions[i].selectedAnswer;
    }

    // Code that will calculate the result
    if (this.totalResult > 0 && this.totalResult <= 50) {
      this.theTruth = "curly fry";
    } else if (this.totalResult > 50 && this.totalResult <= 100) {
      this.theTruth = "regular fry";
    } else {
      this.theTruth = "soggy wet fry";
    }
  }

  alignments = [
    {
      minValue: 0,
      maxValue: 50,
      // image: '',
      title: 'Lawful',
      description: 'You are a sheep'
    },
    {
      minValue: 51,
      maxValue: 100,
      image: '',
      title: 'Neutral',
      description: 'You are normal'
    },
    {
      minValue: 101,
      maxValue: 150,
      image: '',
      title: 'Chaotic',
      description: 'You are evil bruh'
    },
  ]

  questions = [
    {
      title: 'Family elders are expressing disapproval of you to the rest of the family. Do you:',
      selectedAnswer: 0,
      choices: [
        {
          name: 'Accept the criticism and change your ways',
          value: 5
        },
        {
          name: 'Seek a compromise with the elders',
          value: 10
        },
        {
          name: 'Besmirch the reputation of the elders as you ignore their scorn',
          value: 15
        },
        {
          name: 'Silence the elders any way you can',
          value: 20
        }
      ],
    },
    {
      title: 'Would you give up a promising career to aid the family in time of need?',
      selectedAnswer: 0,
      choices: [
        {
          name: 'In a heartbeat',
          value: 5,
        },
        {
          name: 'Yes, with some reluctance',
          value: 10,
        },
        {
          name: 'Only if I was certain I\'d be able to return to my career soon',
          value: 15,
        },
        {
          name: 'No',
          value: 20,
        }
      ],
    },
    {
      title: 'Would you betray a family member to advance your own career?',
      selectedAnswer: 0,
      choices: [
        {
          name: 'Yes, without a twinge of guilt',
          value: 20,
        },
        {
          name: 'Yes, if I could do it secretly',
          value: 15,
        },
        {
          name: 'I\'d resist the temptation',
          value: 10,
        },
        {
          name: 'I find the very idea abhorrent',
          value: 5,
        }
      ],
    },
    {
      title: 'Do you respect the leaders of your family?',
      selectedAnswer: 0,
      choices: [
        {
          name: 'Their words guide my actions',
          value: 5
        },
        {
          name: 'They\'re role moels for me',
          value: 10
        },
        {
          name: 'They\'re often out of touch with my life',
          value: 15
        },
        {
          name: 'They\'re out of touch with reality',
          value: 20
        }
      ]
    },
    {
      title: 'If your family had arrange your marriage to someone loathsome, would you:',
      selectedAnswer: 0,
      choices: [
        {
          name: 'Go through with it, prooud to serve your family',
          value: 5
        },
        {
          name: "Agree, hiding your reluctance",
          value: 10
        },
        {
          name: "Subtly work against the union",
          value: 15
        },
        {
          name: 'Flee',
          value: 20
        }
      ]
    }
  ];
}
