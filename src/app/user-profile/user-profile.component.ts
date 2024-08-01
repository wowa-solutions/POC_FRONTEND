import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  currentSection: string = 'user-address';

  onSectionChange(section: any): void {
    this.currentSection = section;
  }
}