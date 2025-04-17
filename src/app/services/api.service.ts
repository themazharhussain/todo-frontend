import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}
  //Get all items
  getAllTodos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/todos`);
  }

  //Post new item
  addTodo(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/todos`, data);
  }

  // Delete todo
  deleteTodo(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/todos/${id}`);
  }

  //Toggle todo complete
  toggleTodoCompleted(id: string): Observable<any> {
    return this.http.patch(`${this.baseUrl}/todos/${id}/complete`, {});
  }

  //Delete all todos at once
  deleteAllTodos():Observable<any>{
    return this.http.delete(`${this.baseUrl}/todos`)
  }
}
