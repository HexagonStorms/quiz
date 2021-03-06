import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ResultsComponent } from "./results/results.component";
import { QuestionComponent } from "./question/question.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "question/:id", component: QuestionComponent },
  { path: "result", component: ResultsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
