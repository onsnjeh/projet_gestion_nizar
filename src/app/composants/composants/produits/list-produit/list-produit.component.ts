import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent {

  Produit!: Produit[];



  constructor(private router: Router,private ProduitService: ProduitService, private ProduitsComponent :ProduitService) { }



  ngOnInit() {

    console.log(' DepotsListComponent - methode -  ngOnInit')


      this.ProduitService.getProduits()
      .subscribe(Produit => {
        this.Produit = Produit;
      });
  }




  ajouterProduit(){

   this.router.navigate(['/app-produits/app-create-produit']);
  }


  modifierProduit(id: number): void {
    this.router.navigate(['/app-produits/app-edit-produit', id]);
  }


  supprimerProduit(id: number): void {
     this.router.navigate(['/app-produits/app-delete-produit', id]);
  }

}
