import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'students',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentsComponent {
  title = "List of student"
  today: number = Date.now()

  getTitle() {
    return this.title
  }

  getCurrentDate() {
    return this.today
  }
}
