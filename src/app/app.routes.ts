import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { StatusComponent } from './status/status.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PhotosComponent } from './photos/photos.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { UserDashboardComponent } from './auth/user-dashboard/user-dashboard.component';

export const routes: Routes = [
    { path: "counter", component: CounterComponent },
    { path: "status", component: StatusComponent },
    { path: "users", component: UsersComponent },
    { path: "users/:id", component: UserDetailsComponent },
    { path: "photos", component: PhotosComponent },
    { path: "auth/sign-in", component: SignInComponent },
    { path: "auth/user-dashboard", component: UserDashboardComponent },
];
