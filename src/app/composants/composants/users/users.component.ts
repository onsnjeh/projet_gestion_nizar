import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/users/users.service';

 

 @Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit {

  afficheListUsers: boolean = false;
  afficheAjoutUser: boolean = false;
  afficheModifierUser: boolean = false;


  users: User[] | undefined;
  selectedUser: any;

  constructor(private router: Router,@Inject(UserService) private userService: UserService) {}

   ngOnInit(): void {
     this.afficheListUsers = true
    //  throw new Error('Method not implemented.');
    //  this.router.navigate(['']);

   }

 

}
