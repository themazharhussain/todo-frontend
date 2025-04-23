import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardStarter } from './pages/dashboard/starter/starter';
import { BottomBarComponent } from './pages/dashboard/bottom-bar/bottom-bar.component';
import { SideBarComponent } from './pages/dashboard/sidebar/sidebar';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TodoComponent } from './todo/todo.component';
import { TodoWithDbComponent } from './todo-with-db/todo-with-db.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    title: 'App Main Page',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'contact',
        title: 'App Contact Page',
        component: ContactComponent,
      },
      { path: 'form', title: 'Angular form page', component: FormComponent },
      {
        path: 'reactive-form',
        title: 'Reactive Form Module',
        component: ReactiveFormComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    title: 'App Dashboard Page',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'starter',
        pathMatch: 'full',
      },
      {
        path: 'starter',
        title: 'Dashboard Home page',
        component: DashboardStarter,
      },
      {
        path: 'todo',
        title: 'Todo Page',
        component: TodoComponent,
      },
      {
        path: 'todo-with-db',
        title: 'Todo With DB Page',
        component: TodoWithDbComponent,
      },
    ],
  },
];
