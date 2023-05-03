 

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DepotsService } from '../../../../services/depots/depots.service';
import { Depot } from '../../../../models/depot';

@Component({
  selector: 'app-delete-depot',
  templateUrl: './delete-depot.component.html',
  styleUrls: ['./delete-depot.component.scss']
})
export class DeleteDepotComponent {


  depot! : Depot;

  constructor(
    private route: ActivatedRoute,
    private depotService: DepotsService,
    private location: Location
  ) {}


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const depotId = +id;
      this.depotService.getDepot(depotId)
        .subscribe(depot => this.depot = depot);
    }
  }

  supprimerDepot(): void {
    this.depotService.deleteDepot(this.depot.id)
      .subscribe(() => this.location.back());
  }


  goBack(): void {
    this.location.back();
  }


}
