import { Component } from '@angular/core';
import { Article } from './article.model';


@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
})

export class ArticleItemComponent {
  article: Article = {
    name: 'MacBook Pro de 14 pulgadas - Gris espacial',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-14-spacegray-cto-hero-202310?wid=772&hei=466&fmt=jpeg&qlt=90&.v=1697913381764',
    price: 2.029,
    isOnSale: true,
    quantityInCart: 0
  };

  addArticleUnit(): void {
    this.article.quantityInCart += 1;
  }

  removeArticleUnit(): void {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart -= 1;
    }
  }

}
