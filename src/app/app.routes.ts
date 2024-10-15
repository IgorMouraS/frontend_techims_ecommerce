import { Routes } from '@angular/router';
import { CarrinhoPageComponent } from './pages/carrinho-page/carrinho-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PagamentoPageComponent } from './pages/pagamento-page/pagamento-page.component';
import { ProdutosComponent } from './pages/produtos-page/produtos.component';
import { ProdutoPageComponent } from './pages/produto-page/produto-page.component';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';

export const routes: Routes = [
    {
        path: "",
        component: ProdutosComponent
    },
    {
        path: "produto/:tituloId/:produtoId",
        component: ProdutoPageComponent
    },
    {
        path: "perfil",
        component: PerfilPageComponent
    },
    {
        path: "carrinho",
        component: CarrinhoPageComponent
    },
    {
        path: "pagamento",
        component: PagamentoPageComponent
    },
    {
        path: "login",
        component: LoginPageComponent
    },
];
