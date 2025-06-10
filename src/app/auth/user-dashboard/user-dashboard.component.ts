import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UsersService } from '../users/users.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-user-dashboard',
  imports: [UserProfileComponent, UsersComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
})
export class UserDashboardComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((response) => {
      this.usersService.users = response.users;
    });
  }
}