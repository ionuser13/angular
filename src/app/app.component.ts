import { Component, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './models/product.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  
  changeTitle() {
    this.title = "changed";
  }

}
