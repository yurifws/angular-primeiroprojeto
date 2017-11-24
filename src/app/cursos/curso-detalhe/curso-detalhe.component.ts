import { Component } from '@angular/core';

@Component({
  selector: 'app-curso-detalhe',
  /*template:`
      <p>
        curso-detalhe component! <br/>

        {{cursosdetalhe}}
      </p>
  ` */
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css'],
})
export class CursoDetalheComponent  {

cursosdetalhe = 'variável cursos detalhe';
}
