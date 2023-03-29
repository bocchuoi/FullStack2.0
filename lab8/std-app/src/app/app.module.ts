import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentComponent } from './students.component';
import { AppRoutingModule } from './app-routing.module'; 
import { StudentsComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
