import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../../pages/dashboard/sidebar/sidebar';
import { DashboardStarter } from "../../pages/dashboard/starter/starter";

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet, SideBarComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {

}
