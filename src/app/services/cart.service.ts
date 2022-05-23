import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { Cart } from '../model/cart';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})



export class CartService {

  cartArticles!: Cart[];
  cartArticle! : Cart;
  article! : Article | undefined;
  articles : Article[] | undefined;
  totalCart : number | undefined;
  customer : Customer | undefined;
  targetCustomer : Customer | undefined;


  constructor() { }



updateArticles(articles : Article[]){
  console.log(articles);
  this.articles=articles;
}

updateCart(id:number, quantity:number){
  if (this.articles) this.article = this.articles.find(item => item.id === id);
  if(this.article){
    this.article.qty = this.article?.tempValue;
    this.article.tempValue=0;}
//   let cartId = this.cartArticles?.length;
//   let targetQuantity = quantity;
// if(targetArticle)
//   this.cartArticle = {id: cartId ,article:targetArticle,quantity:targetQuantity}}
// this.cartArticles?.push(this.cartArticle);
// console.log("cartArticle" + this.cartArticle);
// console.log("cartArticles" + this.cartArticles);
}

getTotal(){
  let total = 0;
  for (var i = 0; i < this.cartArticles!.length; i++) {
      if (this.cartArticles![i].quantity) {
          total += this.cartArticles![i].article.price*this.cartArticles![i].quantity;
          this.totalCart = total;
      }
  }
}

clearCart(articles:Article[]){

}

// inutilisé pour le moment car probleme de "properties undefined" illisible lors de l'initialisation de la page
getCustomer(){
    var lastName = this.customer?.lastName;
    var firstName = this.customer?.firstName;
    var adress = this.customer?.adress;
    var phone = this.customer?.phone;
    var mail = this.customer?.mail;
    var contact = {"lastName":lastName,"firstName":firstName, "adress":adress,"phone":phone,"mail":mail};
    return contact;
}
}


