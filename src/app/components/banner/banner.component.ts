import { Component, OnInit } from '@angular/core';
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  faPlay = faPlay;

  faInfoCircle = faInfoCircle;

  constructor() { }

  ngOnInit(): void {
  }
}
