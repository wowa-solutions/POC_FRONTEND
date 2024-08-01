import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  isCartOpen: boolean = false;
  isUserMenuOpen: boolean = false;

  menuItems: string[] = [
    'Startseite',
    'HHC Vapes',
    'THCp Vapes',
    'THC Vapes',
    'HHC Spacejellies',
    'Wissen',
    'Kontakt',
  ];

  cartItems = [
    {
      name: 'Amnesia Haze',
      price: 37.46,
      quantity: 1,
      image: '../../assets/items/Amnesia Haze.webp',
    },
    {
      name: 'Pineapple Express',
      price: 37.46,
      quantity: 1,
      image: '../../assets/items/Gorilla Glue.webp',
    },
    {
      name: 'Gorilla Glue',
      price: 37.46,
      quantity: 1,
      image: '../../assets/items/OG Kush.webp',
    },
    {
      name: 'OG Kush',
      price: 37.46,
      quantity: 1,
      image: '../../assets/items/Pineapple Express.webp',
    },
    {
      name: 'Amnesia Haze',
      price: 37.46,
      quantity: 1,
      image: '../../assets/items/Amnesia Haze.webp',
    },
    {
      name: 'Pineapple Express',
      price: 37.46,
      quantity: 1,
      image: '../../assets/items/Gorilla Glue.webp',
    },
    {
      name: 'Gorilla Glue',
      price: 37.46,
      quantity: 1,
      image: '../../assets/items/OG Kush.webp',
    },
    {
      name: 'OG Kush',
      price: 37.46,
      quantity: 1,
      image: '../../assets/items/Pineapple Express.webp',
    },
    {
      name: 'Amnesia Haze',
      price: 37.46,
      quantity: 1,
      image: '../../assets/items/Amnesia Haze.webp',
    },
    {
      name: 'Pineapple Express',
      price: 37.46,
      quantity: 1,
      image: '../../assets/items/Gorilla Glue.webp',
    },
    {
      name: 'Gorilla Glue',
      price: 37.46,
      quantity: 1,
      image: '../../assets/items/OG Kush.webp',
    },
    {
      name: 'OG Kush',
      price: 37.46,
      quantity: 1,
      image: '../../assets/items/Pineapple Express.webp',
    },
  ];

  constructor(private router: Router, private loginService: LoginService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMenuOpen = false;
      }
    });
  }

  toggleMenu(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleCart(event: Event) {
    event.stopPropagation();
    this.isCartOpen = !this.isCartOpen;
  }

  toggleUserMenu(event: Event) {
    event.stopPropagation();
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  addToCart(name: string, price: number) {
    const existingItem = this.cartItems.find((item) => item.name === name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({
        name,
        price,
        quantity: 1,
        image: '../../assets/items/default.png',
      });
    }
  }

  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getTotal() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const cart = document.querySelector('.cart');
    const cartButton = document.querySelector('.fa-shopping-cart');
    const userMenu = document.querySelector('.user-menu');
    const userButton = document.querySelector('.fa-user');
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeMenuIcon = document.querySelector('.close-menu');

    if (
      cart &&
      cartButton &&
      !cart.contains(event.target as Node) &&
      !cartButton.contains(event.target as Node) &&
      this.isCartOpen
    ) {
      this.isCartOpen = false;
    }

    if (
      userMenu &&
      userButton &&
      !userMenu.contains(event.target as Node) &&
      !userButton.contains(event.target as Node) &&
      this.isUserMenuOpen
    ) {
      this.isUserMenuOpen = false;
    }

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

  logoutProcess() {
    this.loginService.logoutProcess();
  }
}
