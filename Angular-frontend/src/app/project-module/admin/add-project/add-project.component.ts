import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iprojects } from 'src/app/interfaces/userInterface';

import { AuthService } from 'src/app/Service/auth-services.service';
import { UserProjectService } from 'src/app/Service/user-project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  addForm!: FormGroup;
  errorMessage = '';
  constructor(
    private FB: FormBuilder,
    private userProjectservice: UserProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addForm = this.FB.group({
      name: [null, [Validators.required]],
      userId: [null, [Validators.required]],
      description: [null, [Validators.required]],
      DueDate: [null, [Validators.required]],
    });
  }
  add() {
    if (this.addForm.valid) {
      this.userProjectservice
        .addProject(this.addForm.value)
        .subscribe((res) => {
          this.router.navigate(['admin/add-Project']);
        });
    }
  }
}
