import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entree } from 'src/app/models/entree.model';
import { EntreesService } from 'src/app/services/entrees/entrees.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-entrees',
  templateUrl: './edit-entrees.component.html',
  styleUrls: ['./edit-entrees.component.scss']
})

  export class EditEntreeComponent implements OnInit {


  entrees!: Entree;
  //user: User = new User(); // initialisation de la variable user

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private entreesService: EntreesService
  ) { }

/*
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.entreesService.getentrees(id)
      .subscribe(entrees => this.entrees = entrees);
  }
   */
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const entreesId = +id;
      this.entreesService.getEntrees(entreesId)
        .subscribe(entrees => this.entrees = entrees);
    }
  }


  onSubmit(): void {
    this.entreesService.updateEntrees(this.entrees)
      .subscribe(() => this.goBack());
  }


  goBack(): void {
    this.location.back();
  }


}


