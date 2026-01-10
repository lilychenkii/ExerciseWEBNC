import { Component } from '@angular/core';

@Component({
  selector: 'app-learndirective',
  standalone: false,
  templateUrl: './learndirective.html',
  styleUrl: './learndirective.css',
})
export class Learndirective {
  show_view:number=1
  change_view()
  {
    if(this.show_view==1)
      this.show_view=2
    else
      this.show_view=1
  }
  provinces=["Hanoi","Danang","HCM","Cantho","Hue"]
  products=[{"id":"p1","name":"coca","price":100},
            {"id":"p2","name":"pepsi","price":200},
            {"id":"p3","name":"sting","price":400},
            {"id":"p4","name":"sprite","price":300}
  ]
}
