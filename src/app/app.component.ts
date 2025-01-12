import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, UserComponent, TasksComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  users = DUMMY_USERS;
  // userId : string = '';
  // userName : string = '';
  // userAvatar : string = '';
  user: any = {
    id: '',
    name: '',
    avatar: ''
  };

  onSelectUser(id: string) {
    // console.log('User selected index:', this.getUserById(id));
    this.user = this.getUserById(id);
    // this.user = selectedUser;
    console.log('User selected:', this.user);
  }

  private getUserById(id: string) {
    return this.users.find(user => user.id === id);
  }
}
