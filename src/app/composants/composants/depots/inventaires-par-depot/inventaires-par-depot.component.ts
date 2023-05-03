import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventaire } from 'src/app/models/inventaire';
import { InventairesService } from 'src/app/services/inventaires/inventaires.service';

@Component({
  selector: 'inventaires-par-depot',
  templateUrl: './inventaires-par-depot.component.html',
  styleUrls: ['./inventaires-par-depot.component.scss']
})
export class InventairesParDepotComponent {


  inventaires!: Inventaire[];
  depotId!: number;
 
  nomDepot!: string;
  codeDepot!: string;

  constructor(private inventaireService: InventairesService, private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.depotId = params['id'];

      console.log('on va chercher les  inventaires du depot qui a un ID == ' + this.depotId)

      this.inventaireService.getInventairesByDepot(this.depotId).subscribe((data: any) => {

        console.log('la reponse du service inventaireService.getInventairesByDepot est ' + JSON.stringify(data));

        this.inventaires = data.inventaires;

        this.codeDepot = data.codeDepot;

        this.nomDepot = data.nom;
 
      });
    });
  }


  retourListeDepots(){
    this.router.navigate(['/app-depots']);
  }
  

}
