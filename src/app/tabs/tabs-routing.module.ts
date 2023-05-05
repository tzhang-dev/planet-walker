import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'personal',
        loadChildren: () =>
          import('../personal/personal.module').then(
            (m) => m.PersonalPageModule
          ),
      },
      {
        path: 'universe',
        loadChildren: () =>
          import('../universe/universe.module').then(
            (m) => m.UniversePageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/personal',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/personal',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
