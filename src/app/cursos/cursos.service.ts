import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    constructor(){

    }

    getCursos(){
        return ['Angular2', 'Java', '.NET','Swift'];
    }

}