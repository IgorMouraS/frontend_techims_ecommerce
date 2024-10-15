import { Component, computed, inject, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutoService } from '../../services-data/produto-service/produto-service.component';

@Component({
  selector: 'app-produto-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './produto-page.component.html',
  styleUrl: './produto-page.component.css'
})

export class ProdutoPageComponent {

  @Input() produtoId!: string;
  @Input() tituloId!: string;

  private produtoService = inject(ProdutoService);

  get produtos() {
    return this.produtoService.getProdutos();
  }

  get produtoTitulo() {
    return this.produtos.conteudo
      .find(u => u.id === this.tituloId)?.itens
      .find(u => u.id === this.produtoId)?.titulo || '';
  }

  get produtoImagem() {
    return this.produtos.conteudo
      .find(u => u.id === this.tituloId)?.itens
      .find(u => u.id === this.produtoId)?.imagem || '';
  }

  get produtoDescricao() {
    return this.produtos.conteudo
      .find(u => u.id === this.tituloId)?.itens
      .find(u => u.id === this.produtoId)?.descricao || '';
  }


}
