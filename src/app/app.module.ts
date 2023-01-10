import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { produtosService } from './features/produtos/produtos.service';
import { ProdutosTableComponent } from './features/produtos/produtos-table/produtos-table.component';
import { ProdutosFormComponent } from './features/produtos/produtos-form/produtos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosTableComponent,
    ProdutosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [produtosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
