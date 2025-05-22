import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GraphqlServiceService } from '../graphql-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  graphqlApi: GraphqlServiceService = inject(GraphqlServiceService);

  onSubmit(){
    this.graphqlApi.onSubmit(this.username, this.password);
  }
}
