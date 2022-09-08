import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { CadastroClientesComponent } from './pages/cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './pages/consulta-clientes/consulta-clientes.component';
import { EdicaoClientesComponent } from './pages/edicao-clientes/edicao-clientes.component';
import { InputTextModule } from 'primeng/inputtext';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'consulta-clientes' },
  { path: 'cadastro-clientes', 
        component: CadastroClientesComponent },
  { path: 'consulta-clientes', 
        component: ConsultaClientesComponent },
  { path: 'edicao-clientes/:idCliente', 
        component: EdicaoClientesComponent }
];

export const options: Partial<IConfig | null> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastroClientesComponent,
    ConsultaClientesComponent,
    EdicaoClientesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
