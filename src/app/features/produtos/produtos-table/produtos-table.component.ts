import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { IProdutos } from '../produtos.model';
import { produtosService } from '../produtos.service'
@Component({
  selector: 'app-produtos-table',
  templateUrl: './produtos-table.component.html',
  styleUrls: ['./produtos-table.component.css']
})
export class ProdutosTableComponent implements OnInit {

  public produto: IProdutos[] = [];

  constructor(private produtosService: produtosService) {
  }

  ngOnInit(): void {
    this.produtosService.ObterProdutos()
      .pipe(take(1))
      .subscribe((dados: IProdutos[]) => {
        this.produto = dados;
      });
  }


}
