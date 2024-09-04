import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { ButtonsComponent } from './utils/buttons/buttons.component';
import { RedSocialsComponent } from './component/red-socials/red-socials.component';
import { SocialMediaComponent } from './component/social-media/social-media.component';
import { InicioComponent } from './page/component/inicio/inicio.component';
import { AboutMeComponent } from './page/component/about-me/about-me.component';
import { PorfolioComponent } from './page/component/porfolio/porfolio.component';
import { ServiciosComponent } from './page/component/servicios/servicios.component';
import { ContactoComponent } from './page/component/contacto/contacto.component';
import { AppRoutingModule } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    RouterModule ,
    ButtonsComponent,
    RedSocialsComponent,
    SocialMediaComponent,
    InicioComponent,
    AboutMeComponent,
    PorfolioComponent,
    ServiciosComponent,
    ContactoComponent,
    AppRoutingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'porfolio';
  showPagina = true;


  public ngOnInit() {
   
  }
}
