import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseDetailService } from '../../service/course-detail.service';

@Component( {
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: [ './course-detail.component.css' ],
  providers: [CourseDetailService]
} )
export class CourseDetailComponent implements OnInit {

  courseDetailForm: FormGroup;

  constructor(private courseDetailService: CourseDetailService) { }

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
    this.courseDetailService.postCourseDetails(this.courseDetailForm.value).subscribe(
      response => console.log(response)
    );
  }

}
