import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IProdutos } from "./produtos.model";
import { Observable } from "rxjs";

@Injectable()
export class produtosService{   
    
    private api: string = 'http://localhost:5145'

    constructor( private httpClient: HttpClient) {}

    public cadastrarProdutos(novoProduto: IProdutos): Observable<boolean>{
        return this.httpClient.post<boolean>(`${this.api}/Produto`, novoProduto)
    };


    public ObterProdutos(): Observable<IProdutos[]>{
        return this.httpClient.get<IProdutos[]>(`${this.api}/Produto`)
        
    }

}