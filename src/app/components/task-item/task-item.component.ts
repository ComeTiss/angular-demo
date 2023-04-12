import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/mock/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTaskReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  onDelete(task: Task): void {
    this.onDeleteTask.emit();
  }

  onToggle(task: Task): void {
    this.onToggleTaskReminder.emit();
  }
}
