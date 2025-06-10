import { Component, Input } from '@angular/core';
import { UserDataType } from './users.types';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @Input() usersData: UserDataType[] = [];
}
