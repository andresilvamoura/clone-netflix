import { Component, OnInit } from '@angular/core';
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Movies } from 'src/app/models/movies';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  faPlay = faPlay;

  faInfoCircle = faInfoCircle;

  topTrendingBanner!: Movies;

  topTrendingBGUrl!: string;

  bannerTitle!: string;

  bannerOverview!: string;

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.getTopTrending();
  }

  getTopTrending() {
    this.service.getTopTranding()
      .subscribe(
        (data) => {
          this.topTrendingBGUrl = `https://image.tmdb.org/t/p/original${data.results[0].backdrop_path}`;
          this.bannerTitle = data.results[0].title;
          this.bannerOverview = data.results[0].overview;
        },
      );
  }
}
