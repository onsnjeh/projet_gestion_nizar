import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent {

  afficheDashboardGlobal: boolean = false;

  afficheDashboardDepot: boolean = false;
  afficheDashboardProduit: boolean = false;
 
  afficheDashboardStock: boolean = false;
  afficheDashboardEntree: boolean = false;
  afficheDashboardSortie: boolean = false;
  afficheDashboardInventaire: boolean = false;


    

}
