import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss'
})
export class ListaCompras {
  item: string = '';
  lista: ItemLista[] = [];

  adicionarItem() {
    if (this.item.trim() === '') return;

    const novoItem = new ItemLista();
    novoItem.nome = this.item;
    novoItem.id = this.lista.length + 1;

    this.lista.push(novoItem);
    this.item = ''; 
  }

  limparLista(){
    this.lista = [];
    console.log('A lista foi limpa!');
  }
}