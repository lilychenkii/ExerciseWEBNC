import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  contact_name:string="Nguyen Thi Long Lanh";
  contact_email:string="longlanh@gmail.com";
  contact_phone:string="0987654321";
  sendContact(your_name:string):void
  {
    alert("Bạn ["+your_name+"] muốn gửi contact")
  }
}
