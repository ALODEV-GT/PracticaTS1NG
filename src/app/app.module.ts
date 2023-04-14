import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { HttpClientModule} from "@angular/common/http";
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { TemaComponent } from './pages/tema/tema.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ErrorPageComponent,
    ComentariosComponent,
    InformacionComponent,
    TemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
