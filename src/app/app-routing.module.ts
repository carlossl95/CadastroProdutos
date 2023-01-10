import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosFormComponent } from './features/produtos/produtos-form/produtos-form.component';
import { ProdutosTableComponent } from './features/produtos/produtos-table/produtos-table.component';

const routes: Routes = [
  {
    path: 'produtos',
    children:[
      {
        path: 'formulario',
        component: ProdutosFormComponent,
      },
      {
        path: 'tabela',
        component: ProdutosTableComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
