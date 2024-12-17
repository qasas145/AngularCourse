import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProdcuctService {
  products! : any[];
  constructor(private _httpClient : HttpClient) { }
  getProducts() : Observable<any>{
    return this._httpClient.get('https://dummyjson.com/products');
  }
  getProduct(id : string | null) : Observable<any> {
    return this._httpClient.get('https://dummyjson.com/products/'+id);
  }
}
