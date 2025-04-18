import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonRow,
  IonList,
  IonCol,
  IonInput,
  IonButton,
  IonText,
  IonLabel,
  IonGrid,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonList,
    IonTitle,
    IonContent,
    IonCard,
    IonGrid,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    RouterModule,
    IonItem,
    IonRow,
    IonCol,
    IonInput,
    IonButton,
    IonText,
    CommonModule,
    FormsModule,
  ],
})
export class LoginComponent {}
