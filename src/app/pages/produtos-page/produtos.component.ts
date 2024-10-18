import { Component } from '@angular/core';

import { ProdutoComponent } from "../../components/produto/produto.component";
import { BannerComponent } from "../../components/banner/banner.component";

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [ProdutoComponent, BannerComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

}
