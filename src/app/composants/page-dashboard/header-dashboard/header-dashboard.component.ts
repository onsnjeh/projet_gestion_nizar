import { Component } from '@angular/core';
import { PageDashboardComponent } from '../page-dashboard.component';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.scss']
})
export class HeaderDashboardComponent {


  constructor(private pageDashboard: PageDashboardComponent) {}




  toggleAfficheGlobal() {
    this.setAttr(1);
  }

  toggleAfficheDepot() {
    this.setAttr(2);  }

  toggleAfficheProduit() {
    this.setAttr(3);  }

  toggleAfficheStock() {
    this.setAttr(4);  }

  toggleAfficheEntree() {
    this.setAttr(5);  }

  toggleAfficheSortie() {
    this.setAttr(6);  }

  toggleAfficheInventaire() {
    this.setAttr(7);  }
  
 

  setAttr(attrNumber: number) {
    this.pageDashboard.afficheDashboardGlobal     = false;
    this.pageDashboard.afficheDashboardDepot      = false;
    this.pageDashboard.afficheDashboardProduit    = false;
    this.pageDashboard.afficheDashboardStock      = false;
    this.pageDashboard.afficheDashboardEntree     = false;
    this.pageDashboard.afficheDashboardSortie     = false;
    this.pageDashboard.afficheDashboardInventaire = false;

    switch(attrNumber) {
      case 1:
        this.pageDashboard.afficheDashboardGlobal = true;
        break;
      case 2:
        this.pageDashboard.afficheDashboardDepot  = true;
        break;
      case 3:
        this.pageDashboard.afficheDashboardProduit = true;
        break;
      case 4:
        this.pageDashboard.afficheDashboardStock  = true;
        break;
      case 5:
        this.pageDashboard.afficheDashboardEntree = true;
        break;
      case 6:
        this.pageDashboard.afficheDashboardSortie  = true;
        break;
      case 7:
        this.pageDashboard.afficheDashboardInventaire = true;
        break;
      default:
        break;
    }
  }


 
}
