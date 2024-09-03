import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { AppRoutingModule } from './app.routes';
import { ButtonsComponent } from './utils/buttons/buttons.component';
import { RedSocialsComponent } from './component/red-socials/red-socials.component';
import { SocialMediaComponent } from './component/social-media/social-media.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuComponent,AppRoutingModule,ButtonsComponent,RedSocialsComponent,SocialMediaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'porfolio';
  showPagina = true;


  public ngOnInit() {
   
  }
}
