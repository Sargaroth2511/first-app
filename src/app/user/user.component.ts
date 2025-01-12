import { Component, EventEmitter, Input, input, output, Output } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Output() select = new EventEmitter<string>();
  select = output<string>();

  // avatar = input.required<string>();
  name = input<string>();

  get imagePath() {
    return 'assets/users/'+ this.avatar; 
  }
  
  onSelectUser() {
    this.select.emit(this.id);
  }
}











// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.scss'
// })
// export class UserComponent {
//   randomUser = signal(DUMMY_USERS[randomIndex]);
//   imagePath = computed(() => 'assets/users/'+ this.randomUser().avatar);

//   // get imagePath() {
//   //   return 'assets/users/'+ this.randomUser().avatar; 
//   // }
  
//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.randomUser.set(DUMMY_USERS[randomIndex]);
//   }
// }
