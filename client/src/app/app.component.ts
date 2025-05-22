import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowDataComponent } from './show-data/show-data.component';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShowDataComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clientside';
}
