import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { MyComponent } from './my-component/my-component';
import { Mybinding } from './mybinding/mybinding';
import { Ptb1 } from './ptb1/ptb1';
import { Gpa } from './gpa/gpa';
import { Ptb2 } from './ptb2/ptb2';
import { Learndirective } from './learndirective/learndirective';
import { AppRoutingModule } from '../app/app-routing-module';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Listcustomer } from './listcustomer/listcustomer';
import { Customerdetail } from './customerdetail/customerdetail';
import { Listcustomerservice } from './listcustomerservice/listcustomerservice';
import { Exercise13 } from './exercise13/exercise13';
import { Exercise13Detail } from './exercise13-detail/exercise13-detail';
import { Exercise13Service } from './myservices/exercise13.service';
import { Exercise14 } from './exercise14/exercise14';  
import { CatalogService } from './myservices/catalog.service';
import { HttpClientModule } from '@angular/common/http';
import { Exercise18 } from './exercise18/exercise18';
import { Customerservice } from './myservices/customerservice';
import { CustomergroupService } from './myservices/customergroup.service';
import { Exercise19Product } from './exercise19-product/exercise19-product';
import { Exercise19ListProduct } from './exercise19-list-product/exercise19-list-product';
import { Exercise19ServiceProduct } from './exercise19-service-product/exercise19-service-product';

@NgModule({
  declarations: [
    App,
    About,
    Contact,
    MyComponent,
    Mybinding,
    Ptb1,
    Gpa,
    Ptb2,
    Learndirective,
    Pagenotfound,
    Listcustomer,
    Customerdetail,
    Listcustomerservice,
    Exercise13,
    Exercise13Detail,
    Exercise14,
    Exercise18,
    Exercise19Product,
    Exercise19ListProduct,
    Exercise19ServiceProduct
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    Exercise13Service,
    CatalogService,
    CustomergroupService
  ],
  bootstrap: [App]
})
export class AppModule { }