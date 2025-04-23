import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HomeComponent } from "../../pages/home/home.component";

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class MainLayoutComponent {

}
