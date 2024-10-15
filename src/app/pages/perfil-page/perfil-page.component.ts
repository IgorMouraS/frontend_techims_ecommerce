import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../../data/data.user';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-page.component.html',
  styleUrl: './perfil-page.component.css'
})
export class PerfilPageComponent implements OnInit {
  user!: User;
  userData = JSON.parse(sessionStorage.getItem('userData') || '{}')
  
  private router = inject(Router);
  
  ngOnInit(): void {
    this.user = this.userData;
  }

  onLogOut(): void {
    sessionStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }

}
