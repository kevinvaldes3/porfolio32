import { RouterModule, Routes , ExtraOptions } from '@angular/router';
import { InicioComponent } from './page/component/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { AboutMeComponent } from './page/component/about-me/about-me.component';
import { ServiciosComponent } from './page/component/servicios/servicios.component';
import { PorfolioComponent } from './page/component/porfolio/porfolio.component';
import { ContactoComponent } from './page/component/contacto/contacto.component';

export const routes: Routes = [
    {path:'',component:InicioComponent},
    {path:'inicio', component:InicioComponent},
    {path:'about-me', component:AboutMeComponent},
    {path:'service', component:ServiciosComponent},
    {path:'porfolio', component:PorfolioComponent},
    {path:'contacto', component:ContactoComponent}
];

export const routerOptions : ExtraOptions={
    scrollPositionRestoration:'enabled',
    anchorScrolling:'enabled',
}

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}