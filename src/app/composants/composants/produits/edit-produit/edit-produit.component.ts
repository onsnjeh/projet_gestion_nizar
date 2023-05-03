import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { ProduitsComponent } from '../produits.component';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.scss']
})
export class EditProduitComponent {
  
  produits!: Produit[];



  constructor(private router: Router,private produitService: ProduitService, private produitsComponent :ProduitsComponent) { }



  ngOnInit() {

    console.log(' ProduitsListComponent - methode -  ngOnInit')


      this.produitService.getProduits()
      .subscribe(produits=> {
        this.produits = produits;
      });
  }




  ajouterProduit(){

   this.router.navigate(['/app-produits/create-depot']);
  }


  modifierProduit(id: number): void {
    this.router.navigate(['/app-produits/edit-depot', id]);
  }


  supprimerProduit(id: number): void {
     this.router.navigate(['/app-produits/delete-depot', id]);
  }



}
