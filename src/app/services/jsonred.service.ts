import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonredService {

  constructor(private http: Http) { }

  get(): Observable<any> {
    return this.http.get("/assets/quiz.json")
  }
}
