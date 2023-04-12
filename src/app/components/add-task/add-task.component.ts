import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/mock/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>;
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  onSubmit(): void {
    if (!this.text || !this.day) {
      window.alert('Please enter a Task with a Day & Time');
      return;
    }

    this.onAddTask.emit({ text: this.text, day: this.day, reminder: this.reminder });
    this.resetForm();
  }

  resetForm() {
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
