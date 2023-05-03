import { Stock } from "./stock";

export class Produit {

    constructor(
        public id: number,
        public codeProduit: string,
        public nom: string,
        public description: string,
        public prix: number
       ) {}

}
