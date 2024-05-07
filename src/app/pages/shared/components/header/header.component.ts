import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private viewportscroller: ViewportScroller,
    private router: Router
  ) {}
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  ngOnInit(): void {}
  scrollToAnchor(elementId: string): void {
    this.router.navigateByUrl('/').then(() => {
      // Перенаправление на главную страницу
      this.scrollToTop(); // Прокрутить вверх страницы
      setTimeout(() => {
        // Добавить небольшую задержку перед прокруткой к якорю
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Можно регулировать время задержки в миллисекундах
    });
  }
}
