import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products=products
  d;
  id;

  constructor( 
    private route: ActivatedRoute,  
    private cartService: CartService ) {

   }
   
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id=params.get('id');
      for (let p of this.products) {
        if (p.id == this.id ){
          this.d = p;
        }
    }
    });
  }

  addToCart(d) {
    //window.alert('Your product has been added to the cart!');
    console.log("added to the cart");
    this.cartService.create(d);

    for (let p of this.cartService.getList() ) {
      console.log(p.name);
    }

  }

}
