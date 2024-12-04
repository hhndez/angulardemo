import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { User } from '../../model/User';
import { NgFor } from '@angular/common';
import { map, subscribeOn} from 'rxjs'
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-bulk-edit',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './user-bulk-edit.component.html',
  styleUrl: './user-bulk-edit.component.css'
})
export class UserBulkEditComponent implements OnInit {

  constructor(private dataService : DataService, private formBuilder: FormBuilder) {}

  users : User[] = [];

  mainForm! : FormGroup;

  get userForms() : FormArray {
    return this.mainForm.get('userForms') as FormArray;
  }

  ngOnInit(): void {

    this.mainForm = this.formBuilder.group({userForms : this.formBuilder.array([])});

      this.dataService.getUsers()
        .pipe(map(data => data.slice(0, 10)))
        .subscribe(data => {
          this.users = data;
          this.users.forEach(user => {
            const form = this.formBuilder.group({id : user.id, firstname: user.firstname, surname: user.surname});
            this.userForms.push(form);
          })
        });
  }

  onSubmit() {
    console.log(this.userForms.value);
  }
}
