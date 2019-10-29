import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-root',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products=products;

  constructor() { }

  ngOnInit() {
  }
  share(id) {
    console.log("id="+id);
  }

}
