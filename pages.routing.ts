import { TabelaClientesComponent } from './tabela-clientes/tabela-clientes.component';
import { CadastroClietneComponent } from './cadastro-clietne/cadastro-clietne.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const pagesRoutes = [
      {path: '', component: DashboardComponent},
      {path: 'tabela-clientes', component: TabelaClientesComponent},
      {path: 'cadastro-clientes', component: CadastroClietneComponent},
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})

export class PagesRoutingModule{

}
