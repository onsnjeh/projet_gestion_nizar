import { Client } from "./client.model";
import { Fournisseur } from "./fournisseur.model";

export class Facture {


    constructor(
        public id: number,
        public date: Date,
        public montant: number,
        public client: Client,
        public fournisseur: Fournisseur
      ) {}
      
}
