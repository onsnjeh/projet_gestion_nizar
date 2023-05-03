import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDashboardComponent } from './composants/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './composants/pages/page-statistiques/page-statistiques.component';
import { PageInscriptionComponent } from './composants/pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './composants/pages/page-login/page-login.component';

import { DepotsComponent } from './composants/composants/depots/depots.component';
import { ProduitsComponent } from './composants/composants/produits/produits.component';
import { StocksComponent } from './composants/composants/stocks/stocks.component';
import { EntreeComponent } from './composants/composants/entrees/entrees.component';

import { SortieComponent } from './composants/composants/sorties/sorties.component';
import { InventairesComponent } from './composants/inventaires/inventaires.component';
import { UsersComponent } from './composants/composants/users/users.component';
import { HeaderDashboardComponent } from './composants/page-dashboard/header-dashboard/header-dashboard.component';
import { UserListComponent } from './composants/composants/users/user-list/user-list.component';
import { EditUserComponent } from './composants/composants/users/edit-user/edit-user.component';
import { DeleteUserComponent } from './composants/composants/users/delete-user/delete-user.component';
import { CreateUserComponent } from './composants/composants/users/create-user/create-user.component';
import { EntreeListComponent } from './composants/composants/entrees/entrees-list/entrees-list.component';
import { CreateEntreeComponent } from './composants/composants/entrees/create-entrees/create-entrees.component';
import { EditEntreeComponent } from './composants/composants/entrees/edit-entrees/edit-entrees.component';
import { DeleteEntreeComponent } from './composants/composants/entrees/delete-entrees/delete-entrees.component';
import { SortieListComponent } from './composants/composants/sorties/sortie-list/sortie-list.component';
import { CreateSortieComponent } from './composants/composants/sorties/create-sortie/create-sortie.component';
import { EditSortieComponent } from './composants/composants/sorties/edit-sortie/edit-sortie.component';
import { DeleteSortieComponent } from './composants/composants/sorties/delete-sortie/delete-sortie.component';
import { DepotsListComponent } from './composants/composants/depots/depots-list/depots-list.component';
import { CreateDepotComponent } from './composants/composants/depots/create-depot/create-depot.component';
import { EditDepotComponent } from './composants/composants/depots/edit-depot/edit-depot.component';
import { DeleteDepotComponent } from './composants/composants/depots/delete-depot/delete-depot.component';
import { ArticlesParDepotComponent } from './composants/composants/depots/articles-par-depot/articles-par-depot.component';
import { MouvementsParDepotComponent } from './composants/composants/depots/mouvements-par-depot/mouvements-par-depot.component';
import { InventairesParDepotComponent } from './composants/composants/depots/inventaires-par-depot/inventaires-par-depot.component';
import { ListProduitComponent } from './composants/composants/produits/list-produit/list-produit.component';
import { CreateProduitComponent } from './composants/composants/produits/create-produit/create-produit.component';
import { DeleteProduitComponent } from './composants/composants/produits/delete-produit/delete-produit.component';
import { EditProduitComponent } from './composants/composants/produits/edit-produit/edit-produit.component';
import { ArticlesComponent } from './composants/composants/articles/articles.component';
import { ArticlesListComponent } from './composants/composants/articles/articles-list/articles-list.component';
import { CodesBarresComponent } from './composants/composants/qr-codes/qr-codes.component';
import { CodesBarresContenuComponent } from './composants/composants/qr-codes/qr-codes-contenu/qr-codes-contenu.component';
import { DetailsUserComponent } from './composants/composants/users/details-user/details-user.component';



const routes: Routes = [
  { path: "", component: PageLoginComponent },
  { path: "inscrire", component: PageInscriptionComponent },
  { path: "pageDashboard", component: PageDashboardComponent },
  { path: "app-header-dashboard", component: HeaderDashboardComponent },

  { path: "stat", component: PageStatistiquesComponent },

  { path: "app-dashboards", component: PageDashboardComponent },
  { path: "app-produits", component: ProduitsComponent ,
  children: [

    {
      path: '',
      component: ListProduitComponent,
    },
    {
      path: 'app-create-produit',
      component: CreateProduitComponent,
    },
    {
      path: 'app-edit-produit/:id',
      component: EditProduitComponent,
    },
    {
      path: 'app-delete-produit/:id',
      component: DeleteProduitComponent,
    }
  ]},
  { path: "app-stocks", component: StocksComponent },
  { path: "app-entrees", component: EntreeComponent ,
  children: [

    {
      path: '',
      component: EntreeListComponent,
    },
    {
      path: 'app-create-entrees',
      component: CreateEntreeComponent,
    },
    {
      path: 'app-edit-entrees/:id',
      component: EditEntreeComponent,
    },
    {
      path: 'app-delete-entrees/:id',
      component: DeleteEntreeComponent,
    }
  ]
},
  { path: "app-inventaires", component: InventairesComponent },
  {
    path: "app-users", component: UsersComponent,
    children: [

      {
        path: '',
        component: UserListComponent,
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
      },
      {
        path: 'edit-user/:id',
        component: EditUserComponent,
      },
      {
        path: 'delete-user/:id',
        component: DeleteUserComponent,
      },
      {
        path: 'detail-user/:id',
        component: DetailsUserComponent,
      }
    ]
  },



    { path: "app-depots", component: DepotsComponent ,

    children: [

      {
        path: '',
        component: DepotsListComponent,
      },
      {
        path: 'create-depot',
        component: CreateDepotComponent,
      },
      {
        path: 'edit-depot/:id',
        component: EditDepotComponent,
      },
      {
        path: 'delete-depot/:id',
        component: DeleteDepotComponent,
      },
      {
        path: 'articles-par-depot/:id',
        component: ArticlesParDepotComponent,
      },
      {
        path: 'mouvements-par-depot/:id',
        component: MouvementsParDepotComponent,
      },
      {
        path: 'inventaires-par-depot/:id',
        component: InventairesParDepotComponent,
      }
    ]
  },


  { path: "app-articles", component: ArticlesComponent ,

  children: [

    {
      path: '',
      component: ArticlesListComponent,
    },
    {
      path: 'create-article',
      component: CreateDepotComponent,
    },
    {
      path: 'edit-article/:id',
      component: EditDepotComponent,
    },
    {
      path: 'delete-article/:id',
      component: DeleteDepotComponent,
    }
  ]
},


  {
    path: "app-sorties", component: SortieComponent,
    children: [

      {
        path: '',
        component: SortieListComponent,
      },
      {
        path: 'app-create-sorties', /* à compléter */
        component: CreateSortieComponent,
      },
      {
        path: 'app-edit-sorties/:id', /* à compléter */
        component: EditSortieComponent,
      },
      {
        path: 'app-delete-sorties/:id', /* à compléter */
        component: DeleteSortieComponent,
      }
    ]
  },
  { path: "app-qr-codes", component: CodesBarresComponent ,
  children: [

    {
      path: '',
      component: CodesBarresContenuComponent,
    }
  ]
}


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
