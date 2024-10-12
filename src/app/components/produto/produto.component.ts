import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PRODUTOS } from '../../../data/data-produtos';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  data_produtos = PRODUTOS
}
