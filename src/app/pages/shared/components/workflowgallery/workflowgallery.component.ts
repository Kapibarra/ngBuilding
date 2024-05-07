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
  constructor() {}
  ngOnInit() {}
}
