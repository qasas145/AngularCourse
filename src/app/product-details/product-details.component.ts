import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProdcuctService } from '../services/prodcuct.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  constructor(private _router : ActivatedRoute, private _productService : ProdcuctService){
    this.getProduct();
  }
  product : Product | undefined;
  getProduct(){
    this._productService.getProduct(this._router.snapshot.paramMap.get('id')).subscribe(
      (data)=>{console.log(data);this.product = data}
    );
  }
}
