import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent {

  cursos = 'variável cursos';

  //cursosArray = ['Angular2', 'Java', '.NET'];

  cursosArray;
  constructor(cursosService: CursosService){
    
    //let cursosService: CursosService = new CursosService();
    this.cursosArray = cursosService.getCursos();
  }

}
