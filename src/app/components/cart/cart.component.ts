import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  articles : Article[] | undefined;
  article!: Article;
  cartArticles!: Cart[];
  cartArticle! : Cart;
  storageKey : string = "cartValue";
  totalCart=0;
  tva!:number;
  constructor(private cartService : CartService, private router : Router) { }

  ngOnInit() {
    this.cartArticles=this.cartService.cartArticles;
    this.cartService.restoreCart;
    // this.totalCart=this.getTotal();
    // this.tva=this.tvaCollector();
  }

  updateCart(){
    this.cartService.updateCart(this.article?.id, this.article?.tempValue);
      }

  getTotal(){
    let total = 0;
    for (var i = 0; i < this.articles!.length; i++) {
        if (this.articles![i].qty) {
            total += this.articles![i].price*this.articles![i].qty;
            this.totalCart = total;
        }
    }
    return total
  }

  tvaCollector(){
    let tva=0;
    tva = this.totalCart*0.206
    return tva;
  }

  }


