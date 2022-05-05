import { Component, OnInit } from '@angular/core';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  collapsed = true;

  faSearch = faSearch;

  faBell = faBell;

  constructor() { }

  ngOnInit(): void {
    this.navChangeColorWhenScroll();
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  navChangeColorWhenScroll() {
    window.addEventListener('scroll', () => {
      const query = document.querySelector('nav')?.classList;
      if (window.pageYOffset > 100) {
        query?.add('bg-black');
        query?.remove('bg-black_opac');
      } else {
        query?.remove('bg-black');
        query?.add('bg-black_opac');
      }
    });
  }
}
