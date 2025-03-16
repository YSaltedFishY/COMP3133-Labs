import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//Import the common module for pipes
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  userName = 'Haoyun Yang';

  title = 'w10_angular';

  message = 'Hello from appComponent'

  buttonClick() : void {
    alert("Hello angular")
  }

  zeldaImage = "https://assets.nintendo.com/image/upload/v1718726257/Microsites/zelda-portal/videos/posters/TLoZ-EchoesOfWisdom-s"

  today : Date = new Date(2025,3,14)
  now = new Date()

  stud={
    id:101,
    firstName: "Haoyun",
    lastName: "Yang",
    course: "Angular"
  }

  

}
