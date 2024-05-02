import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MapaDePragasComponent } from './pages/mapa-de-pragas/mapa-de-pragas.component';
import { AdicionarPragaComponent } from './pages/adicionar-praga/adicionar-praga.component';
import { AddButtonComponent } from './pages/add-button/add-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MapaDePragasComponent,
    AdicionarPragaComponent,
    AddButtonComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
