import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/common/header/header.component';
import { CourseDetailComponent } from './component/course-detail/course-detail.component';
import { QuestionComponent } from './component/question/question.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule( {
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseDetailComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '25175596994-338imgf6rt0dlt916ev29in8th6birlb.apps.googleusercontent.com'
            )
          }
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
