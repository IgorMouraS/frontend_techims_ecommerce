import { Component } from '@angular/core';

import { ProdutoComponent } from "../../components/produto/produto.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { CategoriaComponent } from "../../components/categoria/categoria.component";
import { BarraInfoComponent } from "../../components/barra-info/barra-info.component";
import { ItensVendaComponent } from "../../components/itens-venda/itens-venda.component";

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [ProdutoComponent, BannerComponent, CategoriaComponent, BarraInfoComponent, ItensVendaComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

}
