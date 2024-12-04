import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit{
  userForm = new FormGroup(
    {
      id : new FormControl(''),
      firstname : new FormControl(''),
      surname : new FormControl('')
    }
  );

  constructor(private dataService : DataService, private route: ActivatedRoute) {}

  handleSubmit() {
    console.log("data", this.userForm);
  }

  userId : number = 0;

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log("GOT:", params['id']);
      this.userId = +params['id'];
      this.dataService.getUser(this.userId).subscribe(user => {
        /*
        this.userForm.get("id")?.patchValue(user.id + "");
        this.userForm.get("firstname")?.patchValue(user.firstname);
        this.userForm.get("surname")?.patchValue(user.surname);
        */
       this.userForm.patchValue({id : `${user.id}`, firstname: user.firstname, surname: user.surname})
      });
    });
  }
}
