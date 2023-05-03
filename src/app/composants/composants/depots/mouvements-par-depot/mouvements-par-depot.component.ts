import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MouvementsService } from 'src/app/services/mouvements/mouvements.service';

@Component({
  selector: 'mouvements-par-depot',
  templateUrl: './mouvements-par-depot.component.html',
  styleUrls: ['./mouvements-par-depot.component.scss']
})
export class MouvementsParDepotComponent {

  mouvements!: string[];
  depotId!: number;

  constructor(private mouvementService: MouvementsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.depotId = params['depotId'];
      this.mouvementService.getMouvementsByDepot(this.depotId).subscribe((data : string[]) => {
        this.mouvements = data;
      });
    });
  }
  
}
