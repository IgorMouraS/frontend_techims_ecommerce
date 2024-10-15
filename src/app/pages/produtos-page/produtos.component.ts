import { Component } from '@angular/core';

import { ProdutoComponent } from "../../components/produto/produto.component";

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [ProdutoComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

}
