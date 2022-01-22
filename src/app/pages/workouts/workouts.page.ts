import { Component, OnInit } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import {
  LocalStorageService,
  Workout,
} from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {
  items: Workout[] = [];
  newItem: Workout = <Workout>{};

  constructor(
    private storageService: LocalStorageService,
    private plt: Platform,
    private toastController: ToastController,
    private route: Router,
    private menu: MenuController
  ) {
    this.loadItems();
  }

  loadItems() {
    this.storageService.getItems().then((items) => {
      this.items = items;
    });
  }

  deleteItem(item: Workout) {
    this.storageService.deleteItem(item.id).then((item) => {
      this.showToast('Trénink byl odstraněn');
      this.loadItems();
    });
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  goToAddPageButton() {
    this.route.navigate(['/tabs/addPage']);
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
    this.route.navigate(['/tabs/home']);
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  goToAddPage() {
    this.openCustom();
    this.route.navigate(['/tabs/addPage']);
  }

  goToHome() {
    this.openCustom();
  }

  goToWorkouts() {
    this.openCustom();
    this.route.navigate(['/tabs/workouts']);
  }

  ngOnInit() {}
}
