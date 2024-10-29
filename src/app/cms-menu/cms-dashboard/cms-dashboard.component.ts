import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cms-dashboard',
  templateUrl: './cms-dashboard.component.html',
  styleUrls: ['./cms-dashboard.component.css']
})
export class CmsDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  visitorStats = {
    today: 120,
    thisWeek: 850,
    thisMonth: 3200
  };

  recentActivities = [
    { date: '2023-07-05', description: 'User John Doe registered' },
    { date: '2023-07-04', description: 'Page "About Us" updated' },
    { date: '2023-07-03', description: 'New blog post published' }
  ];

  notifications = [
    { date: '2023-07-05', message: 'System update available' },
    { date: '2023-07-04', message: 'New user registration: John Doe' }
  ];
}