import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';

import { ArticlesService } from 'src/app/services/articles/articles.service';
import { DepotsComponent } from '../../depots/depots.component';
import { MatDialog } from '@angular/material/dialog';
import { PopupDepotsComponent } from '../popup-depots/popup-depots.component';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
 
  articles: Article[]=[];  // votre liste d'articles
  currentPage: number = 1; // la page actuelle (par défaut, la première page)
  itemsPerPage: number = 10; // nombre d'articles par page
  pageSizeOptions = [5, 10, 20];

  constructor(private articleService: ArticlesService,private dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    console.log(' ArticlesListComponent - methode -  ngOnInit')


    this.articleService.getArticles()
      .subscribe(articles => {

        this.articles = articles;
      });
  }


  getArticlesForPage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.articles.slice(startIndex, endIndex);
  }



  pages() {
    const pagesCount = Math.ceil(this.articles.length / this.itemsPerPage);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return pages;
  }
  

  ouvrirPopup(article:Article): void {
    const dialogRef = this.dialog.open(PopupDepotsComponent, {
      width: '800px',
      height: '800px',
      data: article
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  modifierArticle(id: number): void {
    this.router.navigate(['/app-articles/edit-article', id]);
  }


  supprimerArticle(id: number): void {
     this.router.navigate(['/app-articles/delete-article', id]);
  }






}
