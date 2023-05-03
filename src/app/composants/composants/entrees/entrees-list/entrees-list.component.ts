import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Entree } from 'src/app/models/entree.model';
import { EntreeComponent } from '../entrees.component';
import { EntreesService } from 'src/app/services/entrees/entrees.service';

@Component({
  selector: 'app-entrees-list',
  templateUrl: './entrees-list.component.html',
  styleUrls: ['./entrees-list.component.scss']
})
export class EntreeListComponent {
  entrees!: Entree[];



  constructor(private router: Router,private entreesService: EntreesService, private entreesComponent :EntreeComponent ) { }




  ngOnInit() {
    console.log(' entreesListComponent - methode -  ngOnInit')


    this.entreesService.getEntree()
      .subscribe(entrees => {
        this.entrees = entrees;
      });
  }




  ouvrirPageNewEntrees(){

   this.router.navigate(['/app-entrees/app-create-entrees']);
  }


  ouvrirPageEditEntrees(id: number): void {
    this.router.navigate(['/app-entrees/app-edit-entrees', id]);
  }


  ouvrirPageDeleteEntrees(id: number): void {
     this.router.navigate(['/app-entrees/app-delete-entrees', id]);
  }



}


