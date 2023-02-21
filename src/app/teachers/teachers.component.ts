import { Component } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  title: string = 'Professores';

  public teachers = [
    { id: 1, name: 'Roberto', subject: 'Matemética' },
    { id: 2, name: 'Claudia', subject: 'Física' },
    { id: 3, name: 'Rosângela', subject: 'Química' },
    { id: 4, name: 'Cirlene', subject: 'Português' },
    { id: 5, name: 'Otto', subject: 'Artes' },
    { id: 6, name: 'Heitor', subject: 'Educação Física' },
    { id: 7, name: 'Vânia', subject: 'História' },
  ]

}
