import { Article } from "./article";

export class Cart {
  id: number;
  article : Article;
  quantity: number;

constructor(id:number,  article : Article,
  quantity: number)
{
this.id = id;
this.article=article;
this.quantity=quantity;
}

};
