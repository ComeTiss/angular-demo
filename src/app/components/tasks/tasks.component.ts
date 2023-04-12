import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/mock/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
     this.taskService
      .getTasks()
      .subscribe(data => this.tasks = data); 
  }

  deleteTask(task: Task): void {
    this.taskService
      .deleteTask(task)
      .subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id)); 
  }

  toggleTaskReminder(task: Task): void {
    task.reminder = !task.reminder;
      this.taskService
        .updateTask(task)
        .subscribe();
  }

  addTask(task: Task): void {
    this.taskService
      .createTask(task)
      .subscribe(data => this.tasks.push(data));
  }
}
