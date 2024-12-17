import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], search: string): Product[] {
    return products.filter((p)=>p.title.toLowerCase().includes(search));
  }

}
