import { Depot } from "./depot";
import { Produit } from "./produit";
import { Stock } from "./stock";

export class Inventaire {

    constructor(
        public id: number,
        public code: string,
        public quantite: number,
        public date: Date,
        public depotId: string,
        public codeInventaire: string
      ) {}

}
