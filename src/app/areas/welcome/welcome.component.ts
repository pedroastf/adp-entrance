import { Component, OnInit } from '@angular/core';
import { JsonredService } from 'src/app/services/jsonred.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class welcomeComponent implements OnInit {


  quiz: [];

  constructor(private jsonredService: JsonredService) { }

  ngOnInit() {
    this.jsonredService.get().subscribe(ret => {
      let data = JSON.parse(ret.text());
      this.quiz = data.quizzes;
    })
  }

}
