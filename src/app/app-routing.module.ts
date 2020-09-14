import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseDetailComponent } from './component/course-detail/course-detail.component';
import { QuestionComponent } from './component/question/question.component';

const routes: Routes = [
  { path: 'course-detail', component: CourseDetailComponent},
  { path: 'question', component: QuestionComponent}
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
