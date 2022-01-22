import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import {
  LocalStorageService,
  Workout,
} from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.page.html',
  styleUrls: ['./add-page.page.scss'],
})
export class AddPagePage implements OnInit {
  items: Workout[] = [];
  newItem: Workout = <Workout>{};

  constructor(
    private storageService: LocalStorageService,
    private toastController: ToastController
  ) {}

  addItem() {
    if (this.requiredForm()) {
      this.storageService.addItem(this.newItem).then((item) => {
        this.newItem = <Workout>{};
        this.showToast('Workout was added');
        window.location.reload();
      });
    }
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  requiredForm(): boolean {
    if (this.newItem.BodyPart == null || this.newItem.BodyPart == '') {
      this.showToast('BodyPart is required');
      return false;
    }
    if (this.newItem.Workout == null || this.newItem.Workout == '') {
      this.showToast('Workout is required');
      return false;
    }

    if (this.newItem.Weight == null) {
      this.showToast('Weight is required');
      return false;
    }

    if (this.newItem.Repetition == null) {
      this.showToast('Repetition is required');
      return false;
    }

    if (this.newItem.NumberOfSeries == null) {
      this.showToast('NumberOfSeries is required');
      return false;
    }

    return true;
  }

  ngOnInit() {}
}