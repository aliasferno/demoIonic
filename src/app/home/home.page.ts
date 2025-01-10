import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  txtN1: number = 0;
  txtN2: number = 0;
  txtResultado: number = 0;
  txtResultadoLista: string = '';

  constructor() {}

  sumar(){
    const n1 = this.txtN1;
    const n2 = this.txtN2;
    const resultado = n1 + n2;
    this.txtResultado = resultado;
  }

  restar(){
    const n1 = this.txtN1;
    const n2 = this.txtN2;
    const resultado = n1 - n2;
    this.txtResultado = resultado;
  }

  multiplicar(){
    const n1 = this.txtN1;
    const n2 = this.txtN2;
    const resultado = n1 * n2;
    this.txtResultado = resultado;
  }

  dividir(){
    const n1 = this.txtN1;
    const n2 = this.txtN2;
    const resultado = n1 / n2;
    this.txtResultado = resultado;
  }

  numeros: Array<number> = [1,2,3,4,5,6,7,8,9,10];

  mostrar(seleccion:number)
  {
    this.txtResultadoLista = seleccion.toString();
  }

}
