import { Depot } from "./depot";
import { Produit } from "./produit";

export class Stock {

    constructor(
        public id: number,
        public quantite: number,
        public depot: Depot,
        public produit: Produit,
        public codeStock: string
      ) {}
}
