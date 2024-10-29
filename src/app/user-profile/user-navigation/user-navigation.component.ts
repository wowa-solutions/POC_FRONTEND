import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: ['./user-navigation.component.css']
})
export class UserNavigationComponent {
  @Output() sectionChange = new EventEmitter<string>();

  constructor() { }

  navigate(section: string): void {
    this.sectionChange.emit(section);
  }
}
