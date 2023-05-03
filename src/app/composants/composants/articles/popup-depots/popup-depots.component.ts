import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Article } from 'src/app/models/article';
import { Depot } from 'src/app/models/depot';
import { DepotsService } from 'src/app/services/depots/depots.service';

@Component({
  selector: 'app-popup-depots',
  templateUrl: './popup-depots.component.html',
  styleUrls: ['./popup-depots.component.scss']
})
export class PopupDepotsComponent {



  depots!: Depot[];  // votre liste de depots
  selectedDepot!: Depot;
  //article !:Article;
  public successMessage: string | null = null;
  public errorMessage: string | null = null;


  constructor(
    public dialogRef: MatDialogRef<PopupDepotsComponent>,
    @Inject(MAT_DIALOG_DATA) public article: Article,
    private depotsService: DepotsService
  ) { }



  ngOnInit() {

    console.log(' PopupDepotsComponent - ngOnInit, - articleID : ', this.article)
    this.selectedDepot = new Depot(0, '', '', '', '', 0, [], [], [], 0);

    this.depotsService.getDepots()
      .subscribe(depots => {
        this.depots = depots;
      });
  }



  affecterArticle(depot: Depot, article: Article): void {




    this.depotsService.affecterArticleAunDepot(depot, article)
      .subscribe(depot => {
        // Succès : le dépôt a été mis à jour avec le nouvel article
        console.log('Le dépôt a été mis à jour avec le nouvel article : ', depot);
        this.successMessage = `L'article a été affecté au dépôt ${depot.nom}`;
        this.errorMessage = null;

        setTimeout(() => {
          this.dialogRef.close();
        }, 2500);


      },
        (error) => {
          // Erreur : la mise à jour du dépôt a échoué
          console.error('La mise à jour du dépôt a échoué : ', error);
          this.successMessage = null;
          this.errorMessage = `Erreur : la mise à jour du dépôt a échoué (${error.message})`;

        }

      );
  }


}
