import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Produit } from 'src/app/models/produit';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'articles-par-depot',
  templateUrl: './articles-par-depot.component.html',
  styleUrls: ['./articles-par-depot.component.scss']
})
export class ArticlesParDepotComponent {

  displayedColumns: string[] = ['id', 'nom', 'description', 'prix', 'quantite', 'seuilMinimum', 'seuilMaximum', 'categorie', 'dateAjout'];

  articles!: Article[];
  depotId!: number;

  nomDepot!: string;
  codeDepot!: string;

  constructor(private articleService: ArticlesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.depotId = params['id'];

      console.log('on va chercher les  articles du depot qui a un ID == ' + this.depotId)

      this.articleService.getArticlesByDepot(this.depotId).subscribe((data: any) => {

        console.log('la reponse du service getArticlesByDepot est ' + JSON.stringify(data));

        this.articles = data.articles;

        this.codeDepot = data.codeDepot;

        this.nomDepot = data.nom;

      });
    });
  }

}
