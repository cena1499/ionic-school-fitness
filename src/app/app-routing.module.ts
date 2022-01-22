import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'workouts',
    loadChildren: () =>
      import('./pages/workouts/workouts.module').then(
        (m) => m.WorkoutsPageModule
      ),
  },
  {
    path: 'add-page',
    loadChildren: () =>
      import('./pages/add-page/add-page.module').then(
        (m) => m.AddPagePageModule
      ),
  },
  {
    path: 'meals',
    loadChildren: () =>
      import('./pages/meals/meals.module').then((m) => m.MealsPageModule),
  },
  {
    path: 'meal-detail',
    loadChildren: () => import('./pages/meal-detail/meal-detail.module').then( m => m.MealDetailPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
