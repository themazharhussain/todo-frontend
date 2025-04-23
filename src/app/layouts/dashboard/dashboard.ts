import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { SideBarComponent } from '../../pages/dashboard/sidebar/sidebar';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'dashboard-layout',
  imports: [NgIf, SideBarComponent, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'], // Fixed typo: should be styleUrls instead of styleUrl
  animations: [
    trigger('sidebarState', [
      transition('expanded => collapsed', [
        style({
          transform: 'translateX(0)', // Sidebar starts from expanded position
        }),
        animate(
          '0.3s ease-out',
          style({
            transform: 'translateX(-100%)', // Sidebar slides out of view when collapsed
          })
        ),
      ]),
      transition('collapsed => expanded', [
        style({
          transform: 'translateX(-100%)', // Sidebar starts from collapsed position
        }),
        animate(
          '0.3s ease-out',
          style({
            transform: 'translateX(0)', // Sidebar slides back to its original position when expanded
          })
        ),
      ]),
    ]),
  ],
})
export class DashboardLayoutComponent {
  isCollapsed = false; // Tracks the sidebar state

  /**
   * Toggles the sidebar's visibility.
   */
  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
