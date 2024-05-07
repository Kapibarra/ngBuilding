import { Component } from '@angular/core';

@Component({
  selector: 'app-project03',
  templateUrl: './project03.component.html',
  styleUrls: ['./project03.component.scss'],
})
export class Project03Component {
  project03 = [
    {
      id: 1,
      imageSrc: 'assets/images/projects/project03/01.jpg',
    },
    {
      id: 2,
      imageSrc: 'assets/images/projects/project03/02.jpg',
    },
    {
      id: 3,
      imageSrc: 'assets/images/projects/project03/03.jpg',
    },
    {
      id: 4,
      imageSrc: 'assets/images/projects/project03/04.jpg',
    },
    {
      id: 5,
      imageSrc: 'assets/images/projects/project03/05.jpg',
    },
    {
      id: 6,
      imageSrc: 'assets/images/projects/project03/06.jpg',
    },
    {
      id: 7,
      imageSrc: 'assets/images/projects/project03/07.jpg',
    },
    {
      id: 8,
      imageSrc: 'assets/images/projects/project03/08.jpg',
    },
    {
      id: 9,
      imageSrc: 'assets/images/projects/project03/09.jpg',
    },
    {
      id: 10,
      imageSrc: 'assets/images/projects/project03/10.jpg',
    },
    {
      id: 11,
      imageSrc: 'assets/images/projects/project03/11.jpg',
    },
    {
      id: 12,
      imageSrc: 'assets/images/projects/project03/12.jpg',
    },
    {
      id: 13,
      imageSrc: 'assets/images/projects/project03/13.jpg',
    },
    {
      id: 14,
      imageSrc: 'assets/images/projects/project03/14.jpg',
    },
    {
      id: 15,
      imageSrc: 'assets/images/projects/project03/15.jpg',
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
