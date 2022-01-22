import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'meals',
        loadChildren: () =>
          import('../pages/meals/meals.module').then((m) => m.MealsPageModule),
      },
      {
        path: 'addPage',
        loadChildren: () =>
          import('../pages/add-page/add-page.module').then(
            (m) => m.AddPagePageModule
          ),
      },
      {
        path: 'workouts',
        loadChildren: () =>
          import('../pages/workouts/workouts.module').then(
            (m) => m.WorkoutsPageModule
          ),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
