import { Component } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  title: string = 'Professores';

  public teachers = [
    { name: 'Roberto' },
    { name: 'Claudia' },
    { name: 'Rosângela' },
    { name: 'Cirlene' },
    { name: 'Otto' },
    { name: 'Heitor' },
    { name: 'Vânia' },
  ]

}
