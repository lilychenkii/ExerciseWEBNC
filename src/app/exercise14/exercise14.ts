import { Component } from '@angular/core';
import { CatalogService } from '../myservices/catalog.service';

@Component({
  selector: 'app-exercise14',
  standalone: false,
  templateUrl: './exercise14.html',
  styleUrl: './exercise14.css',
})
export class Exercise14 {
  public categories: any;

  constructor(private catalogService: CatalogService) {
    this.categories = catalogService.getCategories();
  }
}