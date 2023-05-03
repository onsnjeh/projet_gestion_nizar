import { Component, importProvidersFrom } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sortie } from 'src/app/models/sortie.model';
import { SortiesService } from 'src/app/services/sorties/sorties.service';
import {Location} from '@angular/common'
@Component({
  selector: 'app-delete-sortie',
  templateUrl: './delete-sortie.component.html',
  styleUrls: ['./delete-sortie.component.scss']
})
export class DeleteSortieComponent {

  

  Sorties!: Sortie;

  constructor(
    private route: ActivatedRoute,
    private SortieService: SortiesService,
    private location: Location
  ) {}


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const SortiesId = +id;
      this.SortieService.getSortiesById(SortiesId)
        .subscribe(Sorties => this.Sorties = Sorties);
    }
  }


  supprimerSortie(): void {
    this.SortieService.deleteSorties(this.Sorties.id)
      .subscribe(() => this.location.back());
  }

  goBack(): void {
    this.location.back();
  }

}