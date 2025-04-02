import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../models/Pessoa';

@Component({
  selector: 'app-exemplo-diretorio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exemplo-diretorio.component.html',
  styleUrl: './exemplo-diretorio.component.css'
})
export class ExemploDiretorioComponent {
  exibirTabela: boolean = false;
  nome = '';
  pessoas: Pessoa[] = [
    { id: 1, nome: 'João', cidade: 'Sorocaba', celular: '(11) 9999-9999' },
    { id: 2, nome: 'Maria', cidade: 'Rio de Janeiro', celular: '(21) 9999-9999' },
    { id: 3, nome: 'José', cidade: 'Belo Horizonte', celular: '(31) 9999-9999' },
    { id: 4, nome: 'Ana', cidade: 'Curitiba', celular: '(41) 9999-9999' },];
}
