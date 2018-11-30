import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FirstQuestionComponent } from "./first-question/first-question.component";
import { SecondQuestionComponent } from "./second-question/second-question.component";
import { ThirdQuestionComponent } from "./third-question/third-question.component";
import { ResultComponent } from "./result/result.component";
import { welcomeComponent } from "./welcome/welcome.component";
import { QuizRedRoutingModule } from "./quiz-rounting.module";


@NgModule({
    imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        QuizRedRoutingModule],
    exports: [
        FirstQuestionComponent,
        SecondQuestionComponent,
        ThirdQuestionComponent,
        ResultComponent,
        welcomeComponent
    ],
    declarations: [
        FirstQuestionComponent,
        SecondQuestionComponent,
        ThirdQuestionComponent,
        ResultComponent,
        welcomeComponent
    ]
})
export class QuizRedModule { }
