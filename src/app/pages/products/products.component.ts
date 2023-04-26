import { Component, inject } from '@angular/core';
import {ProductComponent} from './../../components/product/product.component';
import { HttpClient } from "@angular/common/http";
import { Product } from './../../models/product.model';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [ProductComponent, CommonModule],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  http = inject(HttpClient); //patrón de inyección de dependencias, makes sure there is only one instance of HttpClient in all the app
  products: Product[] = [];
  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')//by default this is not a promise. We have something called an 'observable' instead;
      .subscribe((data) => {
        this.products = data;
      });

  }//equivalent to useEffect, 'ok, my component is being rendered, let's do something'
}
