import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';
import Swiper, { Navigation, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() endpoint!: string;

  @Input() title!: string;

  movies!: Movies;

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

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    Swiper.use([Navigation]);
    this.getPopular(this.endpoint);
  }

  getPopular(endpoint: string) {
    this.service.getDataSlider(endpoint).subscribe((data) => {
      this.movies = data;
    });
  }
}
