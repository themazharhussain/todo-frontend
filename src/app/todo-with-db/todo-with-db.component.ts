import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { LoaderComponent } from '../shared/components/loader/loader.component';
import { SimpleLoaderComponent } from '../shared/components/simple-loader/simple-loader.component';

import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo-with-db',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    LoaderComponent
  ],
  templateUrl: './todo-with-db.component.html',
  styleUrls: ['./todo-with-db.component.scss'],
})
export class TodoWithDbComponent implements OnInit {
  todos: any[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getTodos();
  }

  todoForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9 ]{3,50}$'),
    ]),
  });

  getTodos(): void {
    this.apiService.getAllTodos().subscribe({
      next: (res) => {
        this.todos = res;
        console.log(this.todos);

        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      },
      error: (err) => {
        console.error('Error fetching todos:', err);
        this.isLoading = false;
      },
    });
  }

  addNewTodo() {
    const newTodo = { title: this.todoForm.value.title };
    this.apiService.addTodo(newTodo).subscribe((res) => {
      console.log('Item added successfully');
      this.getTodos();
    });
    this.todoForm.reset();
  }

  deleteTodo(id: string): void {
    this.apiService.deleteTodo(id).subscribe(() => {
      console.log('Todo deleted successfully');
      this.getTodos();
    });
  }

  toggleCompleted(id: string): void {
    this.apiService.toggleTodoCompleted(id).subscribe(() => {
      console.log('Todo toggled to completed');
      this.getTodos();
    });
  }

  deleteAllTodos() {
    this.apiService.deleteAllTodos().subscribe(() => {
      this.todos = [];
      console.log('All todos have been deleted');
    });
  }
}
