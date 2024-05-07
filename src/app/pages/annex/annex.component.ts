import { Component } from '@angular/core';

@Component({
  selector: 'app-annex',
  templateUrl: './annex.component.html',
  styleUrls: ['./annex.component.scss'],
})
export class AnnexComponent {
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
