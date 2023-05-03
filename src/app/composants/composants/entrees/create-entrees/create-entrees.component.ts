import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Entree } from 'src/app/models/entree.model';
import { EntreesService } from 'src/app/services/entrees/entrees.service';

@Component({
  selector: 'app-create-entrees',
  templateUrl: './create-entrees.component.html',
  styleUrls: ['./create-entrees.component.scss']
})
export class CreateEntreeComponent {

  
  nouvelleEntree: Entree = new Entree(0, '', '', 0, new Date(),'','');
 
  constructor(private entreesService: EntreesService,  private router: Router) {}
 
  onSubmit() {
    this.entreesService.addEntrees(this.nouvelleEntree).subscribe(
      (response: Entree) => {
        console.log('La nouvelle entrée a été ajoutée avec succès :', response);
        this.router.navigate(['/app-entrees']);
         // Réinitialisation du formulaire
    this.nouvelleEntree = new Entree(0, '', '', 0, new Date(),'','');
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout de la nouvelle entrée :', error);
      }
    );
  }
}
