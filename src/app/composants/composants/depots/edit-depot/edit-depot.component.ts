import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Depot } from 'src/app/models/depot';
import { DepotsService } from 'src/app/services/depots/depots.service';

@Component({
  selector: 'app-edit-depot',
  templateUrl: './edit-depot.component.html',
  styleUrls: ['./edit-depot.component.scss']
})
export class EditDepotComponent implements OnInit {


  nouveauDepot!: Depot;

  constructor(
    private depotService: DepotsService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

 

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const depotId = +id;
      this.depotService.getDepot(depotId)
        .subscribe(depot => this.nouveauDepot = depot);
    }
  }


  onSave() {
    this.depotService.updateDepot(this.nouveauDepot).subscribe();
  }

  onSubmit(): void {
    this.depotService.updateDepot (this.nouveauDepot)
      .subscribe(() => this.goBack());
  }


  goBack(): void {
    this.location.back();
  }


}
