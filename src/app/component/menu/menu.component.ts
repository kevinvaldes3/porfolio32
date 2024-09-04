import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router,  RouterModule} from '@angular/router';
import { AppRoutingModule } from '../../app.routes';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet,AppRoutingModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(private router:Router){}

  goToPart(page:string){
    document.getElementById(page)?.scrollIntoView({behavior:"smooth"});
  }
}
