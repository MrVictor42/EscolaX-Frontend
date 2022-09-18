import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-new-classroom',
    templateUrl: './new-classroom.component.html',
    styleUrls: ['./new-classroom.component.scss']
})
export class NewClassroomComponent implements OnInit {

	@Input() title: string = "Nova Turma";

    constructor() { }

    ngOnInit(): void {

    }
}
