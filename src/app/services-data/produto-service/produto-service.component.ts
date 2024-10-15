import { Injectable } from '@angular/core';
import { PRODUTOS } from '../../../data/data-produtos';

@Injectable({
  providedIn: 'root',
})

export class ProdutoService {
  getProdutos() {
    return PRODUTOS
  }
}
