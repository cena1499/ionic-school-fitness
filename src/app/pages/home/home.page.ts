import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import {
  LocalStorageService,
  Workout,
} from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private route: Router,
    private storageService: LocalStorageService
  ) {
    this.loadItems();
  }

  items: Workout[] = [];
  item: Workout = <Workout>{};

  loadItems() {
    this.storageService.getItems().then((items) => {
      this.items = items.reverse().slice(0, 3);
      this.item = items[0];
    });
  }

  goToAddPageButton() {
    this.route.navigate(['/tabs/addPage']);
  }

  ngOnInit() {}
}
