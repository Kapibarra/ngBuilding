import { Component } from '@angular/core';

@Component({
  selector: 'app-project02',
  templateUrl: './project02.component.html',
  styleUrls: ['./project02.component.scss'],
})
export class Project02Component {
  project02 = [
    {
      id: 1,
      imageSrc: 'assets/images/projects/project02/01.jpg',
    },
    {
      id: 2,
      imageSrc: 'assets/images/projects/project02/02.jpg',
    },
    {
      id: 3,
      imageSrc: 'assets/images/projects/project02/03.jpg',
    },
    {
      id: 4,
      imageSrc: 'assets/images/projects/project02/04.jpg',
    },
    {
      id: 5,
      imageSrc: 'assets/images/projects/project02/05.jpg',
    },
    {
      id: 6,
      imageSrc: 'assets/images/projects/project02/06.jpg',
    },
    {
      id: 7,
      imageSrc: 'assets/images/projects/project02/07.jpg',
    },
    {
      id: 8,
      imageSrc: 'assets/images/projects/project02/08.jpg',
    },
    {
      id: 9,
      imageSrc: 'assets/images/projects/project02/09.jpg',
    },
    {
      id: 10,
      imageSrc: 'assets/images/projects/project02/10.jpg',
    },
    {
      id: 11,
      imageSrc: 'assets/images/projects/project02/11.jpg',
    },
    {
      id: 12,
      imageSrc: 'assets/images/projects/project02/12.jpg',
    },
    {
      id: 13,
      imageSrc: 'assets/images/projects/project02/13.jpg',
    },
    {
      id: 14,
      imageSrc: 'assets/images/projects/project02/14.jpg',
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
