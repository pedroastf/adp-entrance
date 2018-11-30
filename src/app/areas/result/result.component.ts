import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleTimer } from 'ng2-simple-timer';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  points: number;

  constructor(private navigateRouter: Router, private st: SimpleTimer) {
    this.st.unsubscribe(localStorage.getItem("timmer"))
    this.points = +localStorage.getItem("points")
    localStorage.clear()
  }

  ngOnInit() {
  }

}
