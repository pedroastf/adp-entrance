import { Component, OnInit } from '@angular/core';
import { JsonredService } from 'src/app/services/jsonred.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleTimer } from 'ng2-simple-timer';

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.css']
})
export class ThirdQuestionComponent implements OnInit {

  data = [];
  answers = [];
  id: number;
  title: string;
  question: string;
  timerId: string;
  points: number;

  constructor(private jsonredService: JsonredService, private route: ActivatedRoute, private navigateRouter: Router, private st: SimpleTimer) {
    this.st.unsubscribe(localStorage.getItem("timmer"))
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
        this.question = quiz.questions[2].question;
        this.answers = quiz.questions[2].answers;
      })


    });
  }
  counter: number = 0;
  setAnswer(value) {
    if (value) {
      let points = localStorage.getItem("points")
      localStorage.setItem("points", String(+points + 1))
    }

    this.timerId = this.st.subscribe('2sec', () => this.callback());
    localStorage.setItem("timmer", this.timerId);
  }

  callback() {
    this.counter++;
    if (this.counter > 1)
      this.navigateRouter.navigate(['/quiz', this.id, 'result'])
  }

}
