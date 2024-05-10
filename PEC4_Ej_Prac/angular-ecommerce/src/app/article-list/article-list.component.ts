import { Component, OnInit } from '@angular/core';
import { Article, ArticleQuantityChange  } from '../article-item/article.model';


@Component({
  selector: 'app-article-list',
  template: `
  <app-article-item
    *ngFor="let article of articles"
    [article]="article"
    (articleQuantityChange)="quantityChange($event)">
</app-article-item>
  `,
  styles: [`

  p,  h2{
  font-family: "Montserrat", sans-serif;
  }

  .article-container{
    width: fit-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 100px;

  }
  .article-image {
    width: 400px;
    height: auto;
    margin: auto;
    padding: 20px;
  }
  .article-onSale {
    box-shadow: rgb(61, 61, 229) 0px -2px 50px 0px;

  }

  div div:nth-child(1) {
    display: flex;
    justify-content: center;
    flex-direction: column;

  }
  div div:nth-child(2) {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-direction: row;
  }

  div p {
    text-align: center;
  }

  div h2 {
    margin-top: 20px;
    font-size: 1.4rem;
  }
  div div p:nth-child(3) {
    margin-top: 0;
    font-size: 1.3rem;
    font-weight: 500;
    color: rgb(71, 69, 69);
  }
  div div p:nth-child(4) {
    margin-top: 0;
    font-size: 1rem;
    color: rgb(61, 61, 229);
  }
  button {
    width: 40px;
    height: 40px;
    padding: 10px;
    font-size: 1rem;
  }

  .price-onSale {
    color: rgb(128, 128, 128, 0.4);
  }
  `]
})
export class ArticleListComponent implements OnInit{
  articles: Article[] = [];

  ngOnInit(): void {
    this.articles = [
      {
        name: 'MacBook Pro de 14 pulgadas - Gris espacial',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310?wid=772&hei=466&fmt=jpeg&qlt=90&.v=1697913381764',
        price: 2.029,
        isOnSale: true,
        quantityInCart: 0
      },
      {
        name: 'MacBook Pro de 14 pulgadas - Gris espacial',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310?wid=772&hei=466&fmt=jpeg&qlt=90&.v=1697913381764',
        price: 2.029,
        isOnSale: false,
        quantityInCart: 0
      },
      {
        name: 'MacBook Pro de 14 pulgadas - Gris espacial',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310?wid=772&hei=466&fmt=jpeg&qlt=90&.v=1697913381764',
        price: 2.029,
        isOnSale: true,
        quantityInCart: 0
      }
    ];
  }


  quantityChange(event: ArticleQuantityChange): void {

    console.log(event);
  }
}


