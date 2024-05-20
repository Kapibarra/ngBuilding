import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workflowgallery',
  templateUrl: './workflowgallery.component.html',
  styleUrls: ['./workflowgallery.component.scss'],
})
export class WorkflowgalleryComponent implements OnInit {
  gallery01 = [
    {
      id: 8,
      imageSrc: 'assets/images/projects/workflowannex/8.jpg',
    },
    {
      id: 17,
      imageSrc: 'assets/images/projects/workflowannex/17.jpg',
    },
    {
      id: 22,
      imageSrc: 'assets/images/projects/workflowannex/22.jpg',
    },
    {
      id: 23,
      imageSrc: 'assets/images/projects/workflowannex/23.jpg',
    },
    {
      id: 33,
      imageSrc: 'assets/images/projects/workflowannex/33.jpg',
    },
  ];
  gallery02 = [
    {
      id: 1,
      imageSrc: 'assets/images/projects/workflowhouses/1.JPG',
    },
    {
      id: 2,
      imageSrc: 'assets/images/projects/workflowhouses/2.JPG',
    },
    {
      id: 3,
      imageSrc: 'assets/images/projects/workflowhouses/3.JPG',
    },
    {
      id: 4,
      imageSrc: 'assets/images/projects/workflowhouses/4.JPG',
    },
    {
      id: 5,
      imageSrc: 'assets/images/projects/workflowhouses/5.JPG',
    },
    {
      id: 7,
      imageSrc: 'assets/images/projects/workflowhouses/7.JPG',
    },
    {
      id: 8,
      imageSrc: 'assets/images/projects/workflowhouses/8.JPG',
    },
    {
      id: 9,
      imageSrc: 'assets/images/projects/workflowhouses/9.jpg',
    },
    {
      id: 10,
      imageSrc: 'assets/images/projects/workflowhouses/10.jpg',
    },
    {
      id: 11,
      imageSrc: 'assets/images/projects/workflowhouses/11.jpg',
    },
    {
      id: 12,
      imageSrc: 'assets/images/projects/workflowhouses/12.jpg',
    },
    {
      id: 13,
      imageSrc: 'assets/images/projects/workflowhouses/13.jpg',
    },
  ];
  gallery03 = [
    {
      id: 1,
      imageSrc: 'assets/images/projects/workflowinner/01.JPG',
    },
    {
      id: 2,
      imageSrc: 'assets/images/projects/workflowinner/02.JPG',
    },
    {
      id: 3,
      imageSrc: 'assets/images/projects/workflowinner/03.JPG',
    },
    {
      id: 4,
      imageSrc: 'assets/images/projects/workflowinner/04.JPG',
    },
    {
      id: 5,
      imageSrc: 'assets/images/projects/workflowinner/05.JPG',
    },
    {
      id: 6,
      imageSrc: 'assets/images/projects/workflowinner/06.JPG',
    },
    {
      id: 7,
      imageSrc: 'assets/images/projects/workflowinner/07.JPG',
    },
    {
      id: 8,
      imageSrc: 'assets/images/projects/workflowinner/08.jpg',
    },
    {
      id: 9,
      imageSrc: 'assets/images/projects/workflowinner/09.jpg',
    },
    {
      id: 10,
      imageSrc: 'assets/images/projects/workflowinner/010.jpg',
    },
    {
      id: 11,
      imageSrc: 'assets/images/projects/workflowinner/011.jpg',
    },
    {
      id: 12,
      imageSrc: 'assets/images/projects/workflowinner/012.JPG',
    },
    {
      id: 13,
      imageSrc: 'assets/images/projects/workflowinner/013.jpg',
    },
    {
      id: 14,
      imageSrc: 'assets/images/projects/workflowinner/014.jpg',
    },
    {
      id: 15,
      imageSrc: 'assets/images/projects/workflowinner/015.jpg',
    },
    {
      id: 16,
      imageSrc: 'assets/images/projects/workflowinner/016.jpg',
    },
  ];
  gallery04 = [
    {
      id: 1,
      imageSrc: 'assets/images/projects/workflowlandscape/01.JPG',
    },
    {
      id: 2,
      imageSrc: 'assets/images/projects/workflowlandscape/02.JPG',
    },
    {
      id: 3,
      imageSrc: 'assets/images/projects/workflowlandscape/03.JPG',
    },
    {
      id: 4,
      imageSrc: 'assets/images/projects/workflowlandscape/04.JPG',
    },
    {
      id: 5,
      imageSrc: 'assets/images/projects/workflowlandscape/05.JPG',
    },
    {
      id: 6,
      imageSrc: 'assets/images/projects/workflowlandscape/06.JPG',
    },
    {
      id: 7,
      imageSrc: 'assets/images/projects/workflowlandscape/07.JPG',
    },
    {
      id: 8,
      imageSrc: 'assets/images/projects/workflowlandscape/08.JPG',
    },
    {
      id: 9,
      imageSrc: 'assets/images/projects/workflowlandscape/09.JPG',
    },
    {
      id: 10,
      imageSrc: 'assets/images/projects/workflowlandscape/10.JPG',
    },
    {
      id: 11,
      imageSrc: 'assets/images/projects/workflowlandscape/11.JPG',
    },
    {
      id: 12,
      imageSrc: 'assets/images/projects/workflowlandscape/12.JPG',
    },
    {
      id: 13,
      imageSrc: 'assets/images/projects/workflowlandscape/13.JPG',
    },
    {
      id: 14,
      imageSrc: 'assets/images/projects/workflowlandscape/14.jpg',
    },
    {
      id: 15,
      imageSrc: 'assets/images/projects/workflowlandscape/15.JPG',
    },
    {
      id: 16,
      imageSrc: 'assets/images/projects/workflowlandscape/16.JPG',
    },
    {
      id: 17,
      imageSrc: 'assets/images/projects/workflowlandscape/17.jpg',
    },
    {
      id: 18,
      imageSrc: 'assets/images/projects/workflowlandscape/18.jpg',
    },
  ];
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '428px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  constructor() {}
  ngOnInit() {}
}
