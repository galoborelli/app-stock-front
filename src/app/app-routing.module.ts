import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './Components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './Components/listar-productos/listar-productos.component';

const routes: Routes = [
  {path: '',component:ListarProductosComponent},
  {path: 'crear-producto',component:CrearProductoComponent},
  {path: 'editar-producto/:id',component:CrearProductoComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
