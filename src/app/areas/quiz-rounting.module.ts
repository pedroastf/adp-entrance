import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { welcomeComponent } from "./welcome/welcome.component";
import { FirstQuestionComponent } from "./first-question/first-question.component";
import { SecondQuestionComponent } from "./second-question/second-question.component";
import { ThirdQuestionComponent } from "./third-question/third-question.component";
import { ResultComponent } from "./result/result.component";

const routes: Routes = [
    { path: "quiz/:id/first-question", component: FirstQuestionComponent },
    { path: "quiz/:id/second-question", component: SecondQuestionComponent },
    { path: "quiz/:id/third-question", component: ThirdQuestionComponent },
    { path: "quiz/:id/result", component: ResultComponent },
    { path: "", component: welcomeComponent, pathMatch: "full" },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuizRedRoutingModule { }
