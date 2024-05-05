import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  public isFormOpen = false;
  constructor() {}

  ngOnInit(): void {}
  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }
}
