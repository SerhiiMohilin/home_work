import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // 👈 это нужно

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink, CommonModule], // 👈 добавляем CommonModule
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit, OnDestroy {
  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers();
  }

  ngOnDestroy() {
    if (this.usersService.users.length) {
      this.usersService.saveUsersToLS(this.usersService.users)
    }
  }

  // Кастомний алерт

  showAlert = false;
  deletedId: string = '';

  deletedName: string = '';
  deletedUsername: string = '';

  onDelete(user: { id: number | string; name: string; username: string }) {
    this.usersService.deleteUserById(user.id.toString()).subscribe(() => {
      this.deletedName = user.name;
      this.deletedUsername = user.username;
      this.showAlert = true;

      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
    });
  }

}
