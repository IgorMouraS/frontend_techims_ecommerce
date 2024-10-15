import { Component, Output, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { ProdutosComponent } from "./pages/produtos-page/produtos.component";
import { CarrinhoPageComponent } from "./pages/carrinho-page/carrinho-page.component";
import { PagamentoPageComponent } from "./pages/pagamento-page/pagamento-page.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoginPageComponent, ProdutosComponent, CarrinhoPageComponent, PagamentoPageComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TECH_IMS_ECOMMERCE';
}
