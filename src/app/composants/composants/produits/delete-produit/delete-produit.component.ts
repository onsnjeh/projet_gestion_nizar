import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-produit',
  templateUrl: './delete-produit.component.html',
  styleUrls: ['./delete-produit.component.scss']
})
export class DeleteProduitComponent {
  
  produit! : Produit;

  constructor(
    private route: ActivatedRoute,
    private produitService: ProduitService,
    private location: Location
  ) {}


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const produitId = +id;
      this.produitService.getProduit(produitId)
        .subscribe(produit => this.produit = produit);
    }
  }

  supprimerProduit(): void {
    this.produitService.deleteProduit(this.produit.id)
      .subscribe(() => this.location.back());
  }


  goBack(): void {
    this.location.back();
  }



}
