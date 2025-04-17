import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BottomBarComponent } from './dashboard/bottom-bar/bottom-bar.component';
import { SideBarComponent } from './dashboard/side-bar/side-bar.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TodoComponent } from './todo/todo.component';
import { TodoWithDbComponent } from './todo-with-db/todo-with-db.component';


export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: 'contact',
    title: 'App Contact Page',
    component: ContactComponent,
  },
  {
    path: 'form',
    title: 'Angular form page',
    component: FormComponent,
  },
  {
    path:'reactive-form',
    title:"Reactive Form Module",
    component:ReactiveFormComponent
  },
  {
    path:'todo',
    title:"Todo Page",
    component:TodoComponent
  },
  {
    path:'todo-with-db',
    title:"Todo With DB Page",
    component:TodoWithDbComponent
  },
  {
    path: 'dashboard',
    title: 'App Dashboard Page',
    component: DashboardComponent,
    children:[
        {
            path:"side-bar",
            component:SideBarComponent
        },
        {
            path:"bottom-bar",
            component:BottomBarComponent
        },
       
    ]
  },
];
