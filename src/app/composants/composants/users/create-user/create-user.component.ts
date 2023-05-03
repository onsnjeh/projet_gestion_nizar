import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




import { User } from 'src/app/models/user';

import { UserService } from 'src/app/services/users/users.service';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent   {



  id!: number;
  name!: string;
  email!: string;
  password!: string;
  phone!: string;
  role!: string;

  constructor(private userService: UserService ,  private router: Router) {}


  onSubmit() {
    console.log('CreateUserComponent onSubmit new user');

    const user: User = new User(this.id, this.name, this.email, this.password, this.phone, this.role);
    console.log(user);

    this.userService.addUser(user).subscribe((response: User) => {
      console.log('Utilisateur ajouté bloc CreateUserComponent onSubmit :', response);
      this.router.navigate(['/app-users']);
    }, (error: any) => {
      console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
    });

    this.id = 0;
    this.name = '';
    this.email = '';
    this.password = '';
    this.phone = '';
    this.role = '';
  }

}
