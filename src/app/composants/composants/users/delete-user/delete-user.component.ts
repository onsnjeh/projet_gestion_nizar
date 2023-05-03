import { User } from 'src/app/models/user';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent  {


  user!: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const userId = +id;
      this.userService.getUser(userId)
        .subscribe(user => this.user = user);
    }
  }


  supprimerUser(): void {
    this.userService.deleteUser(this.user.id)
      .subscribe(() => this.location.back());
  }

  goBack(): void {
    this.location.back();
  }

}
