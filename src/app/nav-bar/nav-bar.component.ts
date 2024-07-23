import { Component, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('cartBounce', [
      state(
        'small',
        style({
          transform: 'scale(1)',
        }),
      ),
      state(
        'large',
        style({
          transform: 'scale(1.8)',
        }),
      ),
      transition('small <=> large', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class NavBarComponent {
  private subscription: Subscription;

  cartState: string = 'small'; // Startzustand
  isMenuOpen = false;

  constructor(
    private cartService: CartService,
    private router: Router,
  ) {
    this.subscription = this.cartService.addItem$.subscribe(() => {
      this.cartState = 'large'; // Zustand wird auf 'large' geändert, um die Animation auszulösen
      setTimeout(() => {
        this.cartState = 'small'; // Zustand wird nach einer kurzen Verzögerung wieder auf 'small' gesetzt
      }, 350); // Verzögerung in Millisekunden
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMenuOpen = false;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleMenu(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateAndClose(route: string) {
    this.router.navigate([route]);
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const menu = document.querySelector('.menu-kacheln');
    const menuIcon = document.querySelector('.menu-icon');
    const closeMenuIcon = document.querySelector('.close-menu');

    if (
      menu &&
      menuIcon &&
      closeMenuIcon &&
      !menu.contains(event.target as Node) &&
      !menuIcon.contains(event.target as Node) &&
      !closeMenuIcon.contains(event.target as Node) &&
      this.isMenuOpen
    ) {
      this.isMenuOpen = false;
    }
  }
}
