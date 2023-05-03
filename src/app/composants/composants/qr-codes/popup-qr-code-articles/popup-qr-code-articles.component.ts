import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as JsBarcode from 'jsbarcode';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import  QRCode  from 'qrcode-generator';

@Component({
  selector: 'app-popup-qr-code-articles',
  templateUrl: './popup-qr-code-articles.component.html',
  styleUrls: ['./popup-qr-code-articles.component.scss']
})
export class PopupQrCodeArticlesComponent {

  articles!: Article[];  // votre liste d'articles
  currentPage: number = 1; // la page actuelle (par défaut, la première page)
  itemsPerPage: number = 10; // nombre d'articles par page

  pageSizeOptions = [5, 10, 20];

  getArticlesForPages!: Article[];
  articlesParPages!: number[];
 
  constructor(
    public dialogRef: MatDialogRef<PopupQrCodeArticlesComponent>,
    //@Inject(MAT_DIALOG_DATA) public article: Article,
    private  articleService: ArticlesService
  ) { }

  ngOnInit() {
 

    this.articleService.getArticles()
      .subscribe(articles => {
        this.articles = articles;      
      });
  }


  getArticlesForPage() {
    return this.getArticlesForPages
     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.articles.slice(startIndex, endIndex); 
  }
  



  pages() {
    return this.articlesParPages;

     const pagesCount = Math.ceil(this.articles.length / this.itemsPerPage);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return pages; 
  }





  displayCodeBar(article: Article): string {

    console.log('---------------displayCodeBar --------------')
 
       // Création de l'objet QRCode avec les données de l'article
       const qr = QRCode(0, 'L');
       qr.addData(JSON.stringify(article));
       qr.make();
   
       // Récupération de l'image du QR code en format SVG
       const svgString = qr.createSvgTag();
       
       // Retour du code SVG sous forme de chaîne de caractères
       return svgString;

}

  

}
