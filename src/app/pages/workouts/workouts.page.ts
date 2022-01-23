import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
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
    private toastController: ToastController,
    private route: Router
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
      this.showToast('Workout was deleted');
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

  ngOnInit() {}
}
