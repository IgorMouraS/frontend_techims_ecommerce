import { Component } from '@angular/core';

import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

}
