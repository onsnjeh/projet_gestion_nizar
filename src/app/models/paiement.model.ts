import { Facture } from "./facture.model";

export class Paiement {

    constructor(
        public id: number,
        public date: Date,
        public montant: number,
        public facture: Facture
      ) {}
      
}
