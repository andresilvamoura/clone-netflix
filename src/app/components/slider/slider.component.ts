import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  movies = [
    '/lZa5EB6PVJBT5mxhgZS5ftqdAm6.jpg',
    '/syKg3OmdtSYmkA7nNdtPUYdSFGL.jpg',
    '/ypTQL2dpV1Y4pckRxfEVrALfjWz.jpg',
    '/eiSlgyx7G61Ey69K9MmCw9OaHMA.jpg',
    '/tc9ySw8e1nXmd14FEWLkbUEpeFp.jpg',
    '/dwVkoTqFZfrfMOs82afaSt9dPzR.jpg',
    '/zIkGGiQBNITG9vVxgmf6MXQ1gT1.jpg',
    '/9I2ATBaOfwXo23vSBfEAQ3uZhGV.jpg',
    '/nNLPA7tPvyFeMjcCuODH9sKTcXx.jpg',
    '/9XTpJfVTPMqLiZEj0fby3HsiJ5V.jpg',
    '/ryY8WxybOo6Morin6JpXsCqNJ3y.jpg',
    '/mIeQQgXxPyX2VwRLMl6jsvD2KOR.jpg',
    '/hDjWm9yFt7GNFbfoSJXEo8NbSbo.jpg',
    '/4KahLgGArTECtUJWN9ACGR6l1S.jpg',
    '/tXPWkZ03VfFPhok3DkUlJSxWpFv.jpg',
    '/t3SEI2YI81oO3nEgjJ9jMAIKApY.jpg',
    '/zGPLpljwrlK2y7AWXVpGx0ceIyH.jpg',
    '/5tKdjKZT1oUG16n5jefPD4XObZw.jpg',
    '/2MTGip0nfahQ1jPQCZSfCsPBZes.jpg',
    '/kdkk7OBnIL1peW2zwcAAp6O54Jo.jpg',
  ];

  config: SwiperOptions = {
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 1200,
    breakpoints: {
      410: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      620: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
      },
      840: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 6,
      },
      1600: {
        slidesPerView: 7,
        spaceBetween: 30,
        slidesPerGroup: 7,
      },
      1800: {
        slidesPerView: 8,
        spaceBetween: 30,
        slidesPerGroup: 8,
      },
    },
  };

  constructor() { }

  ngOnInit(): void {
    Swiper.use([Navigation]);
  }
}
