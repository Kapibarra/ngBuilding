import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workflowgallery',
  templateUrl: './workflowgallery.component.html',
  styleUrls: ['./workflowgallery.component.scss'],
})
export class WorkflowgalleryComponent implements OnInit {
  gallery01 = [
    {
      id: 1,
      imageSrc: 'assets/images/projects/workflowannex/1.JPG',
    },
    {
      id: 2,
      imageSrc: 'assets/images/projects/workflowannex/2.JPG',
    },
    {
      id: 3,
      imageSrc: 'assets/images/projects/workflowannex/3.JPG',
    },
    {
      id: 4,
      imageSrc: 'assets/images/projects/workflowannex/4.JPG',
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
      id: 6,
      imageSrc: 'assets/images/projects/workflowhouses/6.JPG',
    },
    {
      id: 7,
      imageSrc: 'assets/images/projects/workflowhouses/7.JPG',
    },
    {
      id: 8,
      imageSrc: 'assets/images/projects/workflowhouses/8.JPG',
    },
  ];
  gallery03 = [
    {
      id: 1,
      imageSrc: 'assets/images/projects/workflowinner/1.JPG',
    },
    {
      id: 2,
      imageSrc: 'assets/images/projects/workflowinner/4.JPG',
    },
    {
      id: 3,
      imageSrc: 'assets/images/projects/workflowinner/5.JPG',
    },
    {
      id: 4,
      imageSrc: 'assets/images/projects/workflowinner/7.JPG',
    },
    {
      id: 5,
      imageSrc: 'assets/images/projects/workflowinner/9.JPG',
    },
    {
      id: 6,
      imageSrc: 'assets/images/projects/workflowinner/10.JPG',
    },
    {
      id: 7,
      imageSrc: 'assets/images/projects/workflowinner/12.JPG',
    },
    {
      id: 8,
      imageSrc: 'assets/images/projects/workflowinner/18.JPG',
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
      numVisible: 1,
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
