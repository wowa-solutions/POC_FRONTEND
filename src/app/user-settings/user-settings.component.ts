import { Component } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  settings = {
    emailNotifications: true,
    twoFactorAuthentication: false,
    language: 'English'
  };

  editMode: boolean = false;

  languages = ['English', 'German', 'French', 'Spanish'];

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  saveSettings(): void {
    // Hier könnte der Code zum Speichern der Einstellungen hinzugefügt werden.
    this.toggleEditMode();
  }
}
