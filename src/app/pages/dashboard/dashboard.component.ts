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
  ToastController,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonText,
  IonToast,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way binding

@Component({
  selector: 'app-dashboard',
  imports: [
    IonText,
    IonChip,
    IonList,
    IonCard,
    IonToast,

    IonCardHeader,
    IonCardContent,
    IonCardTitle,
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
    FormsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public name: string = 'Dashboard';
  public checkedInTime: string = '';

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

  // Toast properties
  public isToastOpen: boolean = false;
  public toastMessage: string = '';
  public toastDuration: number = 2000; // 2 seconds
  public toastColor: string = 'success';
  public toastPosition: 'top' | 'middle' | 'bottom' = 'top';

  constructor(private toastController: ToastController) {}

  ngOnInit() {
    // Set the current time as the checked-in time
    const now = new Date();
    this.checkedInTime = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  onTaskCompletion(task: any) {
    if (task.completed) {
      this.toastMessage = `Task "${task.title}" marked as completed!`;
      this.toastPosition = 'bottom'; // Set toast position to top
      this.isToastOpen = true; // Open the toast
    }
  }

  onToastDismiss() {
    this.isToastOpen = false;
  }
}
