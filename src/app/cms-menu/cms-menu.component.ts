import { Component } from '@angular/core';

@Component({
  selector: 'app-cms-menu',
  templateUrl: './cms-menu.component.html',
  styleUrls: ['./cms-menu.component.css']
})
export class CmsMenuComponent {
  currentSection: string = 'dashboard';

  onSectionChange(section: any): void {
    this.currentSection = section;
  }
}
