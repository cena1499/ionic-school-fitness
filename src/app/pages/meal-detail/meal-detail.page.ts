import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.page.html',
  styleUrls: ['./meal-detail.page.scss'],
})
export class MealDetailPage implements OnInit {
  @Input() data: any;
  constructor(private modalCtrl: ModalController) {}

  async close() {
    await this.modalCtrl.dismiss();
  }
  ngOnInit() {}
}
