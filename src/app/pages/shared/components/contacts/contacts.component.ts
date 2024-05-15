import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  mobile: boolean = false;
  constructor() {}

  ngOnInit(): void {
    if (window.screen.width <= 968) {
      this.mobile = true;
      console.log(this.mobile);
    }
  }
}
