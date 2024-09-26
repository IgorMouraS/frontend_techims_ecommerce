import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from "./components/login/login.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { ProdutosComponent } from "./pages/produtos-page/produtos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoginComponent, LoginPageComponent, ProdutosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TECH_IMS_ECOMMERCE';
}
