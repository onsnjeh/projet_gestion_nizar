import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantsComponent } from './composants/composants.component';
import { ServicesComponent } from './services/services.component';
import { PagesComponent } from './composants/pages/pages.component';
import { PageInscriptionComponent } from './composants/pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './composants/pages/page-login/page-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Utiliser les composants Material Design dans vos composants
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// models
import {User} from './models/user';

//composants
import { PageDashboardComponent } from './composants/page-dashboard/page-dashboard.component';
import { DepotsComponent } from './composants/composants/depots/depots.component';
import { ProduitsComponent } from './composants/composants/produits/produits.component';
import { StocksComponent } from './composants/composants/stocks/stocks.component';
import { EntreeComponent } from './composants/composants/entrees/entrees.component';
import { SortieComponent } from './composants/composants/sorties/sorties.component';
import { InventairesComponent } from './composants/inventaires/inventaires.component';
import { UsersComponent } from './composants/composants/users/users.component';
import { CreateUserComponent } from './composants/composants/users/create-user/create-user.component';

import { UserListComponent } from './composants/composants/users/user-list/user-list.component';
import { EditUserComponent } from './composants/composants/users/edit-user/edit-user.component';
import { DetailsUserComponent } from './composants/composants/users/details-user/details-user.component';
import { HeaderDashboardComponent } from './composants/page-dashboard/header-dashboard/header-dashboard.component';
import { DepotDashboardComponent } from './composants/page-dashboard/depot-dashboard/depot-dashboard.component';
import { ProduitDashboardComponent } from './composants/page-dashboard/produit-dashboard/produit-dashboard.component';
import { StockDashboardComponent } from './composants/page-dashboard/stock-dashboard/stock-dashboard.component';
import { EntreeDashboardComponent } from './composants/page-dashboard/entree-dashboard/entree-dashboard.component';
import { SortieDashboardComponent } from './composants/page-dashboard/sortie-dashboard/sortie-dashboard.component';
import { InventaireDashboardComponent } from './composants/page-dashboard/inventaire-dashboard/inventaire-dashboard.component';
import { GlobalDashboardComponent } from './composants/page-dashboard/global-dashboard/global-dashboard.component';


import { ArticlesComponent } from './composants/composants/articles/articles.component';

// services
import {UserService } from './services/users/users.service';
import { DeleteUserComponent } from './composants/composants/users/delete-user/delete-user.component';
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
import { DepotsService } from './services/depots/depots.service';
import { ArticlesParDepotComponent } from './composants/composants/depots/articles-par-depot/articles-par-depot.component';
import { MouvementsParDepotComponent } from './composants/composants/depots/mouvements-par-depot/mouvements-par-depot.component';
import { InventairesParDepotComponent } from './composants/composants/depots/inventaires-par-depot/inventaires-par-depot.component';
import { ArticlesService } from './services/articles/articles.service';
import { InventairesService } from './services/inventaires/inventaires.service';
import { MouvementsService } from './services/mouvements/mouvements.service';
import { ProduitService } from './services/produits/produit.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './composants/composants/articles/articles-list/articles-list.component';
import { PopupDepotsComponent } from './composants/composants/articles/popup-depots/popup-depots.component';
import { LayoutComponent } from './composants/composants/layout/layout.component';
import { CodesBarresComponent } from './composants/composants/qr-codes/qr-codes.component';
import { CodesBarresContenuComponent } from './composants/composants/qr-codes/qr-codes-contenu/qr-codes-contenu.component';
import { PopupQrCodeArticlesComponent } from './composants/composants/qr-codes/popup-qr-code-articles/popup-qr-code-articles.component';
import { MaterialModule } from './material.model';




@NgModule({
  declarations: [ // --------------------------vos composants
    AppComponent,
    ComposantsComponent,
    ServicesComponent,
    PagesComponent,
    PageInscriptionComponent,
    PageLoginComponent,
    PageDashboardComponent,
    DepotsComponent,
    ProduitsComponent,
    StocksComponent,
    EntreeComponent,
    SortieComponent,
    InventairesComponent,
    UsersComponent,
    CreateUserComponent,
    UserListComponent,
    EditUserComponent,
    DetailsUserComponent,
    HeaderDashboardComponent,
    DepotDashboardComponent,
    ProduitDashboardComponent,
    StockDashboardComponent,
    EntreeDashboardComponent,
    SortieDashboardComponent,
    InventaireDashboardComponent,
    GlobalDashboardComponent,
    DeleteUserComponent,
    EntreeListComponent,
    CreateEntreeComponent,
    EditEntreeComponent,
    DeleteEntreeComponent,
    SortieListComponent,
    CreateSortieComponent,
    EditSortieComponent,
    DeleteSortieComponent,
    DepotsListComponent,
    ArticlesListComponent,
    CreateDepotComponent,
    EditDepotComponent,
    DeleteDepotComponent,
    ArticlesParDepotComponent,
    MouvementsParDepotComponent,
    InventairesParDepotComponent,
    ArticlesComponent,
    PopupDepotsComponent,
    LayoutComponent,
    CodesBarresComponent,
    CodesBarresContenuComponent,
    PopupQrCodeArticlesComponent
  ],
  imports: [     // --------------------------vos imports
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,


    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    LayoutModule,
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule

  ],
  providers: [   // --------------------------vos providers ou fournisseurs
       UserService,DepotsService , ProduitService, ArticlesService,InventairesService,MouvementsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
