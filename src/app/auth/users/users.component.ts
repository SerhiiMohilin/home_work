import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataType } from './users.types';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input() usersData: UserDataType[] = [];
}

