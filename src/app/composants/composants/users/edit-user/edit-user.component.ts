


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/users/users.service';



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {


  user!: User;
  //user: User = new User(); // initialisation de la variable user

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const userId = +id;
      this.userService.getUser(userId)
        .subscribe(user => this.user = user);
    }
  }


  onSubmit(): void {
    this.userService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }


  goBack(): void {
    this.location.back();
  }


}


