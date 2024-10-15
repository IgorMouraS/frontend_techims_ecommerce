import { Component, inject } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PRODUTOS } from '../../../data/data-produtos';
import { RouterLink } from '@angular/router';
import { ProdutoService } from '../../services-data/produto-service/produto-service.component';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})

export class ProdutoComponent {
  private ProdutoService = inject(ProdutoService);

  get produtos(){
    return this.ProdutoService.getProdutos()
  }
}
