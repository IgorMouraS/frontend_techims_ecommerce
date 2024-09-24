import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GERAL } from '../../data/data-geral';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
  export class LoginComponent {
    infos = GERAL
  }
