import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entree } from 'src/app/models/entree.model';
import { EntreesService } from 'src/app/services/entrees/entrees.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-entrees',
  templateUrl: './delete-entrees.component.html',
  styleUrls: ['./delete-entrees.component.scss']
})
export class DeleteEntreeComponent {


  entrees!: Entree;

  constructor(
    private route: ActivatedRoute,
    private entreesService: EntreesService,
    private location: Location
  ) {}


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const entreesId = +id;
      this.entreesService.getEntrees(entreesId)
        .subscribe(entrees => this.entrees = entrees);
    }
  }


  supprimerEntree(): void {
    this.entreesService.deleteEntrees(this.entrees.id)
      .subscribe(() => this.location.back());
  }

  goBack(): void {
    this.location.back();
  }

}



