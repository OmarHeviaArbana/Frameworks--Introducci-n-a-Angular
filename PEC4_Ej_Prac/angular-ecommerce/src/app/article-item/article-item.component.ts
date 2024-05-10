import { Component, Input , Output, EventEmitter } from '@angular/core';
import { Article } from './article.model';
import { ArticleQuantityChange } from './article.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
})

export class ArticleItemComponent {

  @Input() article = {} as  Article
  @Output() articleQuantityChange = new EventEmitter<ArticleQuantityChange>();


  articleQuantity: number = 0;

  addArticleUnit(): void {
    /* this.article.quantityInCart += 1; */
  }

  removeArticleUnit(): void {
    /* if (this.article.quantityInCart > 0) {
      this.article.quantityInCart -= 1;
    } */
  }


  quantityChange(): void {
      this.articleQuantityChange.emit({
          article: this.article,
          quantity: this.articleQuantity
      });
}

}
