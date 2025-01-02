import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-depoimentos',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.scss'
})
export class DepoimentosComponent {

  depoimentos: Array<{id: number, name: string, comentario: string}> = [
    {
      id: 1,
      name: 'Fernanda',
      comentario: 'Conheci a Fátima através de uma indicação, e que ótima surpresa: profissional excelente, muito criteriosa e atenciosa. Adorei e recomendo!'
    },
    {
      id: 2,
      name: 'Geane Ricardo',
      comentario: 'Amei!!! A Fátima é uma profissional super atenciosa. Cuidou dos meus pés com muito carinho e profissionalismo.Uma pessoa maravilhosa!'
    },
    {
      id: 3,
      name: 'Adriana Pavetits',
      comentario: 'Fui muito bem recebida. É um momento único, para nos mulheres me senti cuidada e relaxada na massagem dos pés. super indico 😍😍'
    }
  ]

}
