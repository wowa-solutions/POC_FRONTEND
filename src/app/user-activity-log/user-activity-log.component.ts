import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-activity-log',
  templateUrl: './user-activity-log.component.html',
  styleUrls: ['./user-activity-log.component.css']
})
export class UserActivityLogComponent implements OnInit {
  activities = [
    { date: '2023-07-01', description: 'Logged in' },
    { date: '2023-07-02', description: 'Changed password' },
    { date: '2023-07-03', description: 'Updated profile picture' }
    // Weitere Aktivitäten können hier hinzugefügt werden
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
