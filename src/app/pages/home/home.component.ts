import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Output() now_playing = '/movie/now_playing';

  @Output() popular = '/movie/popular';

  @Output() top_rated = '/movie/top_rated';

  @Output() upcoming = '/movie/upcoming';
}
