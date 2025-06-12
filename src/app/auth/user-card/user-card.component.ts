import { Component, Input } from '@angular/core';
import { UserDataType } from '../users/users.types';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user!: UserDataType;
}
