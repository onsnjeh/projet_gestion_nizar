import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sortie } from 'src/app/models/sortie.model';
import { SortieComponent } from '../sorties.component';
import { SortiesService } from 'src/app/services/sorties/sorties.service';

@Component({
  selector: 'app-sortie-list',
  templateUrl: './sortie-list.component.html',
  styleUrls: ['./sortie-list.component.scss']
})
export class SortieListComponent {

  Sorties!: Sortie[];



  constructor(private router: Router,private SortiesService: SortiesService, private SortiesComponent :SortieComponent ) { }




  ngOnInit() {
    console.log(' SortiesListComponent - methode -  ngOnInit')


    this.SortiesService.getSortie()
      .subscribe(Sorties => {
        this.Sorties = Sorties;
      });
  }




  ouvrirPageNewSorties(){

   this.router.navigate(['/app-sorties/app-create-sorties']);
  }


  ouvrirPageEditSorties(id: number): void {
    this.router.navigate(['/app-sorties/app-edit-sorties', id]);
  }


  ouvrirPageDeleteSorties(id: number): void {
     this.router.navigate(['/app-sorties/app-delete-sorties', id]);
  }



}



