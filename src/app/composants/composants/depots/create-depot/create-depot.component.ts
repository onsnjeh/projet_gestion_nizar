import { Component } from '@angular/core';
import { DepotsService } from '../../../../services/depots/depots.service';
import { Router } from '@angular/router';
import { Depot } from 'src/app/models/depot';

@Component({
  selector: 'app-create-depot',
  templateUrl: './create-depot.component.html',
  styleUrls: ['./create-depot.component.scss']
})
export class CreateDepotComponent {


  constructor(private depotsService: DepotsService ,  private router: Router) {}


  nouveauDepot: Depot = new Depot(0, '', '', '', '', 0, [], [], [], 0);

  onSubmit() {
    // Enregistrement du nouveau dépôt dans la base de données ou autre traitement
    this.depotsService.addDepot(this.nouveauDepot).subscribe((response :Depot) => {
      this.router.navigate(['/app-depots']);
    })
    console.log('Nouveau dépôt créé : ', this.nouveauDepot);
    
    // Réinitialisation du formulaire
    this.nouveauDepot = new Depot(0, '', '', '', '', 0, [], [], [], 0);
  }


}
