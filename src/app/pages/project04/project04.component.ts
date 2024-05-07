import { Component } from '@angular/core';

@Component({
  selector: 'app-project04',
  templateUrl: './project04.component.html',
  styleUrls: ['./project04.component.scss'],
})
export class Project04Component {
  project04 = [
    {
      id: 1,
      imageSrc: 'assets/images/projects/project04/01.jpg',
    },
    {
      id: 2,
      imageSrc: 'assets/images/projects/project04/02.jpg',
    },
    {
      id: 3,
      imageSrc: 'assets/images/projects/project04/03.jpg',
    },
    {
      id: 4,
      imageSrc: 'assets/images/projects/project04/04.jpg',
    },
    {
      id: 5,
      imageSrc: 'assets/images/projects/project04/05.jpg',
    },
  ];
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
