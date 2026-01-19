import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './about/about';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Listcustomer } from './listcustomer/listcustomer';
import { Customerdetail } from './customerdetail/customerdetail';
import { Listcustomerservice } from './listcustomerservice/listcustomerservice';
import { Exercise13 } from './exercise13/exercise13';
import { Exercise13Detail } from './exercise13-detail/exercise13-detail';
import { Exercise14 } from './exercise14/exercise14';
import { Exercise18 } from './exercise18/exercise18';
import { Exercise19Product } from './exercise19-product/exercise19-product';
import { Exercise19ListProduct } from './exercise19-list-product/exercise19-list-product';
import { Exercise19ServiceProduct } from './exercise19-service-product/exercise19-service-product';

const routes: Routes = [
  { path: "gioi-thieu", component: About },
  {path:"list-customer",component: Listcustomer},
  {path:"list-customer-service",component: Listcustomerservice},
  {path:"list-customer/:id",component: Customerdetail},
  {path:"list-customer-service/:id",component: Customerdetail},
  { path: "exercise13", component: Exercise13 },
  { path: "exercise13/:id", component: Exercise13Detail },
  { path: "exercise14", component: Exercise14 },
  { path: "exercise18", component: Exercise18 },
  { path: "product", component: Exercise19Product },
  { path: "list-product", component: Exercise19ListProduct },
  { path: "service-product", component: Exercise19ServiceProduct },
  {path:"**",component:Pagenotfound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }