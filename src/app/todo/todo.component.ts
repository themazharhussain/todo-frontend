import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Todo } from './types';
import { CommonModule } from '@angular/common';
import { BrowserStorageService } from './services/storage.service';

@Component({
  selector: 'app-todo',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  searchedTodos: Todo[] = [];
  editingTodoId: number | null = null;
  //searchedTodoTitle: string = '';

  constructor(private storageService: BrowserStorageService) {}
  //get todos from storage
  ngOnInit(): void {
    const todosJson = this.storageService.getItem('todos');
    if (todosJson) {
      this.todos = JSON.parse(todosJson);
    }
  }

  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });
  //save todos in storage
  saveTodosToStorage() {
    this.storageService.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo() {
    if (this.todoForm.valid) {
      const newTodo: Todo = {
        id: Date.now(),
        title: this.todoForm.value.title as string,
        isCompleted: false,
        createdAt: new Date(),
      };

      this.todos.push(newTodo);
      this.todoForm.reset();
      //for local storage
      this.saveTodosToStorage();
    }
  }

  deleteTodo(todoId: number) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
    //for local storage
    this.saveTodosToStorage();
  }

  editTodo(todoId: number) {
    const editedTodo = this.todos.find((todo) => todo.id === todoId);

    if (editedTodo) {
      this.editingTodoId = editedTodo.id;
      this.todoForm.setValue({ title: editedTodo.title });
    }
  }

  updateTodo() {
    if (this.editingTodoId != null && this.todoForm.valid) {
      const todoToUpdate = this.todos.find(
        (todo) => todo.id === this.editingTodoId
      );

      if (todoToUpdate) {
        todoToUpdate.title = this.todoForm.value.title as string;
        todoToUpdate.createdAt = new Date();
        this.editingTodoId = null;
        this.todoForm.reset();
        //for local storage
        this.saveTodosToStorage();
      }
    }
  }

  completeTodo(todoId: number) {
    const doneTodo = this.todos.find((todo) => todo.id === todoId);

    if (doneTodo) {
      doneTodo.isCompleted = !doneTodo.isCompleted;
      //for local storage
      this.saveTodosToStorage()
    }
  }

  searchTodo(event: Event) {
    // if (!this.todos.length) return;

    const input = event.target as HTMLInputElement;
    const todoTitle = input.value.trim().toLowerCase();
    this.searchedTodos = this.todos.filter((todo) =>
      todo.title.toLowerCase().includes(todoTitle)
    );
    console.log(this.searchedTodos);
    //input.value = ""
  }

  // get allCompleted(): boolean {
  //   return (
  //     this.todos.length > 0 && this.todos.every((todo) => todo.isCompleted)
  //   );
  // }
  // checked = false;
  // toggleAllTodos() {
  //   if (this.todos.length === 0) return;
  //   const allCompleted = this.todos.every((todo) => todo.isCompleted);
  //   this.todos.forEach((todo) => {
  //     todo.isCompleted = !allCompleted;
  //   });
  // }
}
