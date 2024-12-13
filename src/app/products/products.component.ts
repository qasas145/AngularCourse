import { Component } from '@angular/core';
import { ProdcuctService } from '../services/prodcuct.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products :Product[] = [];
  constructor(private productService : ProdcuctService){
    this.getProducts();
  };
  getProducts() {
    console.log("the btn clicked");
    this.productService.getProducts().subscribe({
      next : (data)=>{this.products = data.products;console.log("the data has been retured");console.log(data);console.log(this.products)},
      error: (errorMessage)=>console.log(errorMessage)

    });
  }
}
