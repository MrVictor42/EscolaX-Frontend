import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/theme/alert/alert.service';
import { Teacher } from '../../../model/teacher';
import { TeacherService } from '../teacher.service';

@Component({
    selector: 'app-new-teacher',
    templateUrl: './new-teacher.component.html',
    styleUrls: ['./new-teacher.component.scss']
})
export class NewTeacherComponent implements OnInit {

    @Input() title: string = "Cadastro de Professor";
    form = new FormGroup({});
    teacher: Teacher = new Teacher();
    errors: string[] = [];

    constructor(
        private teacherService: TeacherService,
        private alertService : AlertService,
        private router : Router) {

    }

    ngOnInit(): void {

    }

    onSubmit() {
        this.teacherService.save(this.teacher).subscribe(response => {
            this.errors = [];
            this.alertService.displaySuccess("Professor Criado Com Sucesso!");
            setTimeout(()=>{
                this.router.navigate(['/home']); //depois vai para a lista de professores
            }, 3000);
        }, errorResponse => {
            this.errors = errorResponse.error.errors;
            this.errors.forEach((item) => {
                this.alertService.displayError(item);
            });
        });
    }
}
