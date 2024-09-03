import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonsComponent } from '../../../utils/buttons/buttons.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ButtonsComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  constructor(){}

  public fotoBaner:string = "./../../../../../src/asset/Foto-sinFondo.png";
  public showPagina:boolean = false;
  public ngOnInit() {
    setTimeout(()=>this.showPagina=true, 1000);
  }

  indicadorRuta(nameRuta:string){
    
  }
}
