import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise13Service } from '../myservices/exercise13.service';

@Component({
  selector: 'app-exercise13-detail',
  standalone: false,
  templateUrl: './exercise13-detail.html',
  styleUrl: './exercise13-detail.css',
})
export class Exercise13Detail {
  public selectedProduct: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private _fs: Exercise13Service,
    private router: Router
  ) {
    activateRoute.paramMap.subscribe(
      (param) => {
        let id = param.get('id');
        if (id != null) {
          this.selectedProduct = _fs.getProductDetail(id);
        }
      }
    );
  }

  goBack() {
    this.router.navigate(['exercise13']);
  }
}
