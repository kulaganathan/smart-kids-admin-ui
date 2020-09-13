import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';

@Component( {
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: [ './question.component.css' ],
  providers: [HttpService]
} )
export class QuestionComponent implements OnInit {

  questionForm: FormGroup;

  constructor( private httpService: HttpService ) { }

  ngOnInit(): void {
    this.questionForm = new FormGroup(
      {
        line1: new FormControl( '' ),
        line2: new FormControl( '' ),
        line3: new FormControl( '' ),
        image1: new FormControl( '' ),
        image2: new FormControl( '' ),
        image3: new FormControl( '' ),
        image1_repeat: new FormControl( '' ),
        option1: new FormControl( '' ),
        option2: new FormControl( '' ),
        option3: new FormControl( '' ),
        option4: new FormControl( '' ),
        answer: new FormControl( '' )
      }
    );
  }

  onSubmit(): void {
    console.log( this.questionForm.value );
    this.httpService.postRequest( '/questions.json', this.questionForm.value ).subscribe(
      response => console.log( response )
    );
  }

}
