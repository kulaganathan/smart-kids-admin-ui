import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component( {
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: [ './course-detail.component.css' ]
} )
export class CourseDetailComponent implements OnInit {

  courseDetailForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.courseDetailForm = new FormGroup(
      {
        subject: new FormControl( '' ),
        grade: new FormControl( '' ),
        topicName: new FormControl( '' ),
        subTopicName: new FormControl( '' ),
        templateName: new FormControl( '' )
      }
    );
  }

  onSubmit(): void {
    console.log( this.courseDetailForm.value );
  }

}
