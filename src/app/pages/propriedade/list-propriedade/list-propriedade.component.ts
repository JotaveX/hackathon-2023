import { Component } from '@angular/core';

@Component({
  selector: 'app-list-propriedade',
  templateUrl: './list-propriedade.component.html',
  styleUrls: ['./list-propriedade.component.css']
})
export class ListPropriedadeComponent {
  propriedades : any[] = [
    {
      nome: "Fazenda azul",

    }
  ];


}
