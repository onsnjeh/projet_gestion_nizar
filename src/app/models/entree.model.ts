import { Depot } from "./depot";
import { Mouvement } from "./mouvement";
import { Produit } from "./produit";



export class Entree extends Mouvement {

    constructor(
        public override id: number,
        public override code: string,
        public override produitId: string,
        public override quantite: number,
        public override dateEntree: Date,
        public override depotId: string,
        public codeEntree: string

      ) {
        super(id, code, produitId, quantite, dateEntree, depotId);
         }

}


