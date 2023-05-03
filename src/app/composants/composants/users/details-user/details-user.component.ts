import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.scss']
})
export class DetailsUserComponent {


  User!: User;

  constructor(
    private route: ActivatedRoute,
    private UserService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.UserService.getUserById(Number(id)).subscribe(User => this.User = User);
    }
  }

  annuler(): void {
    this.router.navigate(['/app-users']);
  }
}
