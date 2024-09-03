import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

@Input() text:string = 'Click on';
@Input() backgroundColor:string = '';
@Input() texColor:string = '';
public classColor: string='';

public ngOnInit() {
  console.log(this.backgroundColor);
  this.classColor = 'background-color:' + this.backgroundColor+';';
  this.classColor += 'color:'+ this.texColor+';';
  console.log(this.classColor);
}

}
