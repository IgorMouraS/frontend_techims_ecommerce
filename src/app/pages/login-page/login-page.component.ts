import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../../services/autenticacao.service';
import { User } from '../../../data/data.user';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';

  private autenticacao = inject(AuthService);
  private router = inject(Router);

  onLogin(event: Event) {
    event.preventDefault();

    this.autenticacao.getUserProfile(this.email).subscribe({
      next: (user: User) => {
        sessionStorage.setItem('userData', JSON.stringify(user));
        this.router.navigate(['/perfil']);
        console.log('Usuário carregado:', user);
      },
      error: (error) => {
        console.error('Erro ao obter o perfil do usuário:', error);
        // Aqui você pode tratar o erro, como mostrar uma mensagem para o usuário
    }
    });
  }

  onRegister(event: Event) {
    event.preventDefault();

    this.autenticacao.createAccount(this.email, this.password);
  }

}
