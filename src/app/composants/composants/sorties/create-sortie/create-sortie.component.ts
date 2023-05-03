import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sortie } from 'src/app/models/sortie.model';
import { SortiesService } from 'src/app/services/sorties/sorties.service';

@Component({
  selector: 'app-create-sortie',
  templateUrl: './create-sortie.component.html',
  styleUrls: ['./create-sortie.component.scss']
})
export class CreateSortieComponent {
  
  nouvelleSortie: Sortie=new Sortie(0, '', '',  0, new Date(),'','');

  constructor(private Sortieservice: SortiesService,  private router: Router) {}
 
  onSubmit() {
    this.Sortieservice.addSorties(this.nouvelleSortie).subscribe(
      (response: Sortie) => {
        console.log('La nouvelle entrée a été ajoutée avec succès :', response);
        this.router.navigate(['/app-sorties']);
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout de la nouvelle entrée :', error);
      }
    );
  }
}
