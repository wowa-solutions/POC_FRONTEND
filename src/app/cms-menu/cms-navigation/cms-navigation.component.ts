import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cms-navigation',
  templateUrl: './cms-navigation.component.html',
  styleUrls: ['./cms-navigation.component.css']
})
export class CmsNavigationComponent {
  @Output() sectionChange = new EventEmitter<string>();

  constructor() { }

  navigate(section: string): void {
    this.sectionChange.emit(section);
  }
}