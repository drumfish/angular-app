import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  setClasses() {
    const classes = {
      todo: true,
      'is-completed': this.todo.completed
    };

    return classes;
  }

  onChange(todo) {
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(todoitem => console.log(todoitem));
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
