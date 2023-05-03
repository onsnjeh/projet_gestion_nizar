export class Article {
    constructor(
      public id: number,
      public nom: string,
      public description: string,
      public prix: number,
      public quantite: number,
      public seuilMinimum: number,
      public seuilMaximum: number,
      public categorie: string,
      public dateAjout: Date
    ) {}
  }
  