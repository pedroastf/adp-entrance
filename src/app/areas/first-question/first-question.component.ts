import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { JsonredService } from 'src/app/services/jsonred.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleTimer } from 'ng2-simple-timer';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.css']
})
export class FirstQuestionComponent implements OnInit {

  data = [];
  answers = [];
  id: number;
  title: string;
  question: string;
  timerId: string;
  points: number;

  constructor(private jsonredService: JsonredService, private route: ActivatedRoute, private navigateRouter: Router, private st: SimpleTimer) {
    this.st.newTimer('2sec', 2);
    this.points = +localStorage.getItem("points")
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.jsonredService.get().subscribe(res => {
        let data = JSON.parse(res.text());
        let quiz = data.quizzes[this.id - 1];

        this.title = quiz.title;
        this.question = quiz.questions[0].question;
        this.answers = quiz.questions[0].answers;
      })


    });
  }
  counter: number = 0;
  setAnswer(value) {
    if (value) {
      let points = localStorage.getItem("points")
      localStorage.setItem("points", String(+points + 1))
    } else {
      localStorage.setItem("points", "0")
    }
    this.timerId = this.st.subscribe('2sec', () => this.callback());
    localStorage.setItem("timmer", this.timerId);


  }

  callback() {
    this.counter++;
    if (this.counter > 1)
      this.navigateRouter.navigate(['/quiz', this.id, 'second-question'])
  }
}
