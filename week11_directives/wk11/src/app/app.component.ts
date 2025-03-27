import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NgIf,SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'week11_directives';

  // members = ["Alice","Bob","Charlie","David","Eve"]
  members = []

  //explicit type specification for array
  documents : {title: string, url:string}[] = [
    {title: "Google", url: "https://www.google.com"},
    {title: "Facebook", url: "https://www.facebook.com"},
    {title: "Twitter", url: "https://www.twitter.com"},
    {title: "Instagram", url: "https://www.instagram.com"},
    {title: "LinkedIn", url: "https://www.linkedin.com"}
  ]

  num1 : number = Math.floor(Math.random()*40)

  letterGrade : string = "X";

  
}
