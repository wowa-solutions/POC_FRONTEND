import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css'],
})
export class MenuPageComponent {
  isMenuOpen: boolean = false;
  menuItems: string[] = [
    'Startseite',
    'HHC Vapes',
    'THCp Vapes',
    'THC Vapes',
    'HHC Spacejellies',
    'Wissen',
    'Kontakt',
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
