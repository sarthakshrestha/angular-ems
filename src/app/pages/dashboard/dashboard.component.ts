import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonList,
  IonChip,
  IonItem,
  IonLabel,
  IonCheckbox,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way binding

@Component({
  selector: 'app-dashboard',
  imports: [
    IonChip,
    IonList,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    CommonModule,
    FormsModule, // Add FormsModule here
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public name: string = 'Dashboard';

  public tasks = [
    {
      title: 'Complete Project Report',
      description: 'Due by EOD',
      completed: false,
    },
    {
      title: 'Team Meeting',
      description: 'Discuss project updates',
      completed: false,
    },
    { title: 'Code Review', description: 'Review PR #42', completed: true },
    {
      title: 'Client Call',
      description: 'Follow up on requirements',
      completed: false,
    },
  ];

  ngOnInit() {}
}
