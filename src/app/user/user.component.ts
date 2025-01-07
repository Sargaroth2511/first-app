import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  randomUser = signal(DUMMY_USERS[randomIndex]);

  get imagePath() {
    return 'assets/users/'+ this.randomUser().avatar; 
  }
  
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.randomUser.set(DUMMY_USERS[randomIndex]);
  }
}
