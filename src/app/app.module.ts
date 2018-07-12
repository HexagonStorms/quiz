import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { QuestionComponent } from './question/question.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { FormsModule } from '@angular/forms';

import { QuizService } from './quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    HomeComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
