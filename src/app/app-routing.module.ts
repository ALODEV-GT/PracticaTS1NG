import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { TemaComponent } from './pages/tema/tema.component';

const rutas: Routes = [
  {
    path: 'maiz',
    component: SidebarComponent,
    children:[
      {
        path: 'comentarios',
        component: ComentariosComponent
      },
      {
        path: 'informacion',
        component: InformacionComponent
      },
      {
        path: ':id',
        component: TemaComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  
  {
    path: '', redirectTo: 'maiz/1', pathMatch: 'full'
  },
  {
    path: '404', //Pagina de error
    component: ErrorPageComponent //Componente relacionado con el path.
  },
  {
    path: '**', //Cualquier otra pagina que no existe.
    redirectTo: '404'
  }

]

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
