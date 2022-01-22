import { Injectable } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { Storage } from '@ionic/storage';

export interface Workout {
  id: number;
  BodyPart: string;
  Workout: string;
  Weight: number;
  Repetition: number;
  NumberOfSeries: number;
  DateTime: string;
}

const ITEMS_KEY = 'workouts';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private storage: Storage) {
    this.storage.create();
  }

  addItem(item: Workout): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Workout[]) => {
      const today = new Date();
      const date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();
      item.DateTime = date;

      if (items) {
        items.push(item);
        this.storage.set(ITEMS_KEY, items);
      } else {
        this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }

  getItems(): Promise<Workout[]> {
    return this.storage.get(ITEMS_KEY);
  }

  updateItem(item: Workout): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Workout[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let newItmes: Workout[] = [];

      for (let i of items) {
        if (i.id === item.id) {
          newItmes.push(item);
        } else {
          newItmes.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newItmes);
    });
  }

  deleteItem(id: number): Promise<Workout> {
    return this.storage.get(ITEMS_KEY).then((items: Workout[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let toKeep: Workout[] = [];

      for (let i of items) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }

      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }
}
