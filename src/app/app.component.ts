import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  questions = [
    {
      number: 1,
      title: "Who are you?",
      choices: [
        {
          title: "Beaver",
          value: "A",
        },
        {
          title: "Ostrich",
          value: "B"
        }
      ]
    }
  ];
}
