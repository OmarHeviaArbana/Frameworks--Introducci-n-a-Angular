export interface Article {
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
}

export interface ArticleQuantityChange {
  article: Article;
  quantity: number;
}
