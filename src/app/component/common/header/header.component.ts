import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
} )
export class HeaderComponent implements OnInit {

  constructor( private authService: SocialAuthService ) { }

  ngOnInit(): void {
  }

  onLogin(): void {

  }

  signInWithGoogle(): void {
    const pro = this.authService.signIn( GoogleLoginProvider.PROVIDER_ID );
    pro.then( socialUser => {
      console.log( socialUser.firstName );
      console.log( socialUser.photoUrl );
      console.log( socialUser.authToken );
      console.log( socialUser.authorizationCode );
      console.log( socialUser.idToken );
    } ).catch( reason => console.error( reason ) );
  }
}
