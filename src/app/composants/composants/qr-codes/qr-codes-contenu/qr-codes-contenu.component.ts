import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupDepotsComponent } from '../../articles/popup-depots/popup-depots.component';
import { PopupQrCodeArticlesComponent } from '../popup-qr-code-articles/popup-qr-code-articles.component';

@Component({
  selector: 'app-qr-codes-contenu',
  templateUrl: './qr-codes-contenu.component.html',
  styleUrls: ['./qr-codes-contenu.component.scss']
})
export class CodesBarresContenuComponent implements OnInit {

loading: any;
afficherSpinner() {
throw new Error('Method not implemented.');
}

   recherche: string = '';
  chargement: boolean = false;
  paragraphes = [
    '  Génération de QR code pour chaque produit / article',
    '  Utilisation de QR code pour la gestion des entrées et des sorties de stock  ',
    '  Génération de QR code pour les factures ',
    '  Utilisation de QR code pour la gestion des transferts de stock ',
    '  Utilisation de QR code pour la gestion des inventaires',
    '  Utilisation de QR code pour la gestion des fournisseurs et des clients'
  ];





  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.chargement = true;
    // Appel à un service qui récupère les paragraphes depuis une source de données
   /*  this.service.getParagraphes().subscribe(paragraphes => {
      this.paragraphes = paragraphes;
      this.chargement = false;
    }); */
  }

  ouvrirPopupQrCodeArticle(paragraphe: String) {
    console.log('The PopupQrCodeArticlesComponent dialog was open');

     const dialogRef = this.dialog.open(PopupQrCodeArticlesComponent, {
      width: '800px',
      height: '990px',
      data: String
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}
