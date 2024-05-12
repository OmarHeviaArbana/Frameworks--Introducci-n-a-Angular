import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article, ArticleQuantityChange  } from '../article-item/article.model';


@Component({
  selector: 'app-article-list',
  template: `
  <app-article-item
    *ngFor="let article of articles"
    [article]="article"
    (addArticle)="addArticleUnit($event.article.id)"
    (removeArticle)="removeArticleUnit($event.article.id)"
    >

  </app-article-item>
  `,
  styles: [`


  `]
})
export class ArticleListComponent implements OnInit{
 // articles: Article[] = [];
 @Input() articles: Article[] = [];
 @Output() articleQuantityChange = new EventEmitter<ArticleQuantityChange>();

  ngOnInit(): void {
    this.articles = [
      {
        name: 'MacBook Pro de 14 pulgadas - Gris espacial',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310?wid=772&hei=466&fmt=jpeg&qlt=90&.v=1697913381764',
        price: 2.029,
        isOnSale: true,
        quantityInCart: 0,
        id: 1
      },
      {
        name: 'MacBook Air de 15 pulgadas - Gris espacial',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310?wid=772&hei=466&fmt=jpeg&qlt=90&.v=1697913381764',
        price: 1.029,
        isOnSale: false,
        quantityInCart: 0,
        id: 2
      },
      {
        name: 'MacBook Pro de 16 pulgadas - Gris espacial',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310?wid=772&hei=466&fmt=jpeg&qlt=90&.v=1697913381764',
        price: 4.029,
        isOnSale: true,
        quantityInCart: 0,
        id: 3
      }
    ];
  }


  addArticleUnit($event : Object ): void {
    const article = this.articles.find(a => a.id === $event);
    if (article) {
      article.quantityInCart++;
    }
  }

  removeArticleUnit($event : Object ): void {
    const article = this.articles.find(a => a.id === $event);
    if (article && article.quantityInCart > 0) {
      article.quantityInCart--;
    }
  }
}


