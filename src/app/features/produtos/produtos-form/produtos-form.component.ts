import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { IProdutos } from '../produtos.model';
import { produtosService } from '../produtos.service'


@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {

  public form!: FormGroup;

  constructor(private produtosService: produtosService) {
    
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl(null, [Validators.required]),
      quantidade: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
      valor: new FormControl(null, [Validators.required]),
    })    
  }

  public salvar(): void{
    if (this.form.valid) {
      const novoProduto : IProdutos ={
        nome: this.form.value.nome,
        quantidade: this.form.value.quantidade,
        valor: this.form.value.valor,
      } 
      this.produtosService.cadastrarProdutos(novoProduto)
      .pipe(take(1))
      .subscribe(() => {
        alert("Salvo com sucesso!")
      })
    }
  }
}
