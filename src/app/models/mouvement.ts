import { Depot } from "./depot";
import { Produit } from "./produit";

export class Mouvement {

    constructor(
     

        public   id: number,
        public   code: string,
        public   produitId: string,
        public   quantite: number,
        public   dateEntree: Date,
        public   depotId: string,
 
      ) {}

}
