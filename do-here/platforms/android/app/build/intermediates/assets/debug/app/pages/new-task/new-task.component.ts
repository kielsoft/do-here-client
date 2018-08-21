import { Component, OnInit } from '@angular/core';
import { Task } from '~/@shared/viewModels/taskViewModel/taskViewModel';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  task:Task;

  constructor(private routerExtensions: RouterExtensions) {
    this.task= new Task();
   }

  ngOnInit() { }
    create(){
      console.log(this.task.Name);
      console.log(this.task.Description);
    }

    moveToMap(){
      console.log("tap");
        this.routerExtensions.navigate(["../map"]);
    }
  }