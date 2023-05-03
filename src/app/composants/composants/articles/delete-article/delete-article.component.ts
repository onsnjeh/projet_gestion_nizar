
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.scss']
})
export class DeleteArticleComponent {


  // Article! : Article;

  // constructor(
  //   private route: ActivatedRoute,
  //   private ArticleService: ArticlesService,
  //   private location: Location
  // ) {}


  // ngOnInit() {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   if (id) {
  //     const ArticleId = +id;
  //     this.ArticleService.getById(ArticleId)
  //       .subscribe(Article => this.Article = Article);
  //   }
  // }

  // supprimerArticle(): void {
  //   this.ArticleService.deleteArticle(this.Article.id)
  //     .subscribe(() => this.location.back());
  // }

  // goBack(): void {
  //   this.location.back();
  // }


}
