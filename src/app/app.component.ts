import { Component, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  http = inject(HttpClient); //patrón de inyección de dependencias, makes sure there is only one instance of HttpClient in all the app
  products: Product[] = [];
  
  changeTitle() {
    this.title = "changed";
  }

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')//by default this is not a promise. We have something called an 'observable' instead;
      .subscribe((data) => {
        this.products = data;
      });

  }//equivalent to useEffect, 'ok, my component is being rendered, let's do something'

}
