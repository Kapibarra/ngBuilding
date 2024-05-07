import { Component } from '@angular/core';

@Component({
  selector: 'app-project05',
  templateUrl: './project05.component.html',
  styleUrls: ['./project05.component.scss'],
})
export class Project05Component {
  project05 = [
    {
      id: 1,
      imageSrc: 'assets/images/projects/project05/01.jpg',
    },
    {
      id: 2,
      imageSrc: 'assets/images/projects/project05/02.jpg',
    },
    {
      id: 3,
      imageSrc: 'assets/images/projects/project05/03.jpg',
    },
    {
      id: 4,
      imageSrc: 'assets/images/projects/project05/04.jpg',
    },
    {
      id: 5,
      imageSrc: 'assets/images/projects/project05/05.jpg',
    },
    {
      id: 6,
      imageSrc: 'assets/images/projects/project05/06.jpg',
    },
    {
      id: 7,
      imageSrc: 'assets/images/projects/project05/07.jpg',
    },
    {
      id: 8,
      imageSrc: 'assets/images/projects/project05/08.jpg',
    },
    {
      id: 9,
      imageSrc: 'assets/images/projects/project05/09.jpg',
    },
    {
      id: 10,
      imageSrc: 'assets/images/projects/project05/10.jpg',
    },
    {
      id: 11,
      imageSrc: 'assets/images/projects/project05/11.jpg',
    },
    {
      id: 12,
      imageSrc: 'assets/images/projects/project05/12.jpg',
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
