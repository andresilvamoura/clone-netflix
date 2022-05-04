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
      if (window.pageYOffset > 100) {
        document.querySelector('nav')?.classList.add('bg-black', 'shadow');
      } else {
        document.querySelector('nav')?.classList.remove('bg-black', 'shadow');
      }
    });
  }
}
