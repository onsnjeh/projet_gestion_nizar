import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Produit } from "src/app/models/produit";
import { ProduitService } from "src/app/services/produit.service";



@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.scss']
})
export class CreateProduitComponent implements OnInit {

  nouveauProduit!: Produit; 

  constructor(private produitService:ProduitService ,  private router: Router) {}

  ngOnInit(): void {

    this.nouveauProduit = new Produit(0, '', '', '', 0 );

    throw new Error('Method not implemented.');
  }






  onSubmit() {
    // Enregistrement du nouveau Produit dans la base de données
    this.produitService.addProduit(this.nouveauProduit).subscribe((response: Produit) => {
      this.router.navigate(['/app-produit']);
    })

    console.log('Nouveau Produit créé : ', this.nouveauProduit);

    // Réinitialisation du formulaire
    this.nouveauProduit = new Produit(0, '', '', '', 0  );
  }

}
