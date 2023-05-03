import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Depot } from 'src/app/models/depot';
import { DepotsService } from '../../../../services/depots/depots.service';
import { DepotsComponent } from '../depots.component';

@Component({
  selector: 'app-depots-list',
  templateUrl: './depots-list.component.html',
  styleUrls: ['./depots-list.component.scss']
})
export class DepotsListComponent implements OnInit {



  depots!: Depot[];



  constructor(private router: Router,private depotsService: DepotsService, private depotsComponent :DepotsComponent ) { }



  ngOnInit() {

    console.log(' DepotsListComponent - methode -  ngOnInit')


      this.depotsService.getDepots()
      .subscribe(depots => {
        this.depots = depots;
      });
  }




  ajouterDepot(){

   this.router.navigate(['/app-depots/create-depot']);
  }


  modifierDepot(id: number): void {
    this.router.navigate(['/app-depots/edit-depot', id]);
  }


  supprimerDepot(id: number): void {
     this.router.navigate(['/app-depots/delete-depot', id]);
  }



}
