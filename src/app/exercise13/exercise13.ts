import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Exercise13Service } from '../myservices/exercise13.service';

@Component({
  selector: 'app-exercise13',
  standalone: false,
  templateUrl: './exercise13.html',
  styleUrl: './exercise13.css',
})
export class Exercise13 {
  public products: any;

  constructor(private perservice: Exercise13Service, private router: Router) {
    this.products = perservice.getProductsWithImages();
  }

  viewDetail(f: any) {
    this.router.navigate(['exercise13', f.ProductId]);
  }
}