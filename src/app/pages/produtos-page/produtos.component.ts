import { Component } from '@angular/core';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProdutoComponent } from "../../components/produto/produto.component";

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [NavbarComponent, ProdutoComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

}
