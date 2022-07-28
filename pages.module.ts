import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroClietneComponent } from './cadastro-clietne/cadastro-clietne.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabelaClientesComponent } from './tabela-clientes/tabela-clientes.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages.routing';
import { MatTableModule } from '@angular/material/table'


@NgModule({
  declarations: [
    DashboardComponent,
    CadastroClietneComponent,
    TabelaClientesComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    RouterModule,
    MatTableModule
  ],
  exports:[
    DashboardComponent,
    CadastroClietneComponent,
    TabelaClientesComponent
  ]
})
export class PagesModule { }
