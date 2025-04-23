import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive,RouterOutlet } from '@angular/router';
import { TodoComponent } from '../../../todo/todo.component';
import { TodoWithDbComponent } from '../../../todo-with-db/todo-with-db.component';

@Component({
  selector: 'dashboard-sidebar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class SideBarComponent {

}
