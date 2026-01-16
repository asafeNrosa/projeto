import { Component } from '@angular/core';
import { ListaCompras } from './lista-compras/lista-compras';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaCompras],
    templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'projeto';
}