import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefas } from '../models/Tarefas';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
  concluido = true;
  tarefas: Tarefas[] = [{ descricao: 'Estudar Angular', concluido: false }, 
    { descricao: 'Estudar Java', concluido: false }, 
    { descricao: 'Estudar Spring', concluido: true }, 
    { descricao: 'Estudar React', concluido: false }, 
    { descricao: 'Estudar Vue', concluido: true }];
}
