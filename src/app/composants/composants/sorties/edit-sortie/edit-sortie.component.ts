import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sortie } from 'src/app/models/sortie.model';
import { SortiesService } from 'src/app/services/sorties/sorties.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-edit-sortie',
  templateUrl: './edit-sortie.component.html',
  styleUrls: ['./edit-sortie.component.scss']
})
export class EditSortieComponent {
  Sorties!: Sortie;
  //user: User = new User(); // initialisation de la variable user

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private SortiesService: SortiesService
  ) { }

/*
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.SortiesService.getSorties(id)
      .subscribe(Sorties => this.Sorties = Sorties);
  }
   */
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const SortiesId = +id;
      this.SortiesService.getSortiesById(SortiesId)
        .subscribe(Sorties => this.Sorties = Sorties);
    }
  }


  onSubmit(): void {
    this.SortiesService.updateSorties(this.Sorties)
      .subscribe(() => this.goBack());
  }


  goBack(): void {
    this.location.back();
  }
}
