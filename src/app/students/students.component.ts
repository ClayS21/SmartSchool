import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  public title: string = 'Alunos';

  public students = [
    { id: 1, name: 'Ana', surname: 'Barbosa', phonenumber: '332255' },
    { id: 2, name: 'Maria', surname: 'Lindberg', phonenumber: '332251' },
    { id: 3, name: 'Lucas', surname: 'Montano', phonenumber: '332253' },
    { id: 4, name: 'Thigo', surname: 'Nigro', phonenumber: '332252' },
    { id: 5, name: 'Christina', surname: 'Rocha', phonenumber: '332259' }
  ]

}
