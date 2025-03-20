import { Component, Input } from '@angular/core';
//Input module helps receive data from parent component

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  //local variable to student component
  x = 10

  // receive data from the parent component using @Input
  @Input() student: any

}
