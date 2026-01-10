import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { MyComponent } from './my-component/my-component';
import { Mybinding } from './mybinding/mybinding';
import { Ptb1 } from './ptb1/ptb1';
import { Gpa } from './gpa/gpa';
import { Ptb2 } from './ptb2/ptb2';
import { FormsModule } from '@angular/forms';
import { Learndirective } from './learndirective/learndirective';

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
    Learndirective  // Giữ Ptb2 ở đây
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // Xóa Ptb2 khỏi imports vì nó không phải standalone
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }