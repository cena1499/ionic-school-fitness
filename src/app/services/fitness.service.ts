import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Meal {
  _id: string;
  title: string;
  preparationTime: number;
  directions: string;
  ingredients: [
    {
      _id: string;
      name: string;
      amount: number;
      amountUnit: string;
      isGroupe: boolean;
    }
  ];
  slug: string;
  lastModified: string;
}

@Injectable({
  providedIn: 'root',
})
export class FitnessService {
  apiUrl = 'https://exercise.cngroup.dk/api';
  meals: any = [];

  constructor(private http: HttpClient) {}

  getMeals() {
    return this.http.get(`${this.apiUrl}/recipes`);
  }

  getMeal(id: string) {
    return this.http.get(`${this.apiUrl}/recipes/${id}`);
  }
}
