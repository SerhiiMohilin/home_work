// import { Component, Input, OnInit } from '@angular/core';
// import { SignedUserDataType } from '../auth.types';
// import { format } from 'date-fns';

// @Component({
//   selector: 'app-user-profile',
//   imports: [],
//   templateUrl: './user-profile.component.html',
//   styleUrl: './user-profile.component.css',
// })
// export class UserProfileComponent implements OnInit {
//   @Input() userData: SignedUserDataType | null = null;

//   @Input() viewVariant: "extended" | "limited" = "limited";

//   lastSeenDate: string = '';

//   ngOnInit() {
//     console.log(this.userData, 'userData');
//     const lastSeenFromLs = localStorage.getItem('lastSeen');

//     if (lastSeenFromLs) {
//       const formattedLastSeen = format(lastSeenFromLs, 'dd.MM.yyyy | hh:mm:ss aa');
//       this.lastSeenDate = formattedLastSeen;
//     }
//   }
// }

import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SignedUserDataType } from '../auth.types';
import { format } from 'date-fns';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  standalone: true
})
export class UserProfileComponent implements OnInit {
  userData: SignedUserDataType | null = null;

  @Input() viewVariant: "extended" | "limited" = "limited";

  lastSeenDate: string = '';

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.userData = this.authService.authUserData;

    const lastSeenFromLs = localStorage.getItem('lastSeen');
    if (lastSeenFromLs) {
      const formattedLastSeen = format(new Date(lastSeenFromLs), 'dd.MM.yyyy | hh:mm:ss aa');
      this.lastSeenDate = formattedLastSeen;
    }
  }
}
