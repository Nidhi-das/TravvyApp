import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
// import Validation from './utils/validation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  form: FormGroup=new FormGroup({
      cars:new FormControl(),
      passengers:new FormControl(),
      location:new FormControl(),
      datet:new FormControl(),
      etime:new FormControl(),
      dlocation:new FormControl(),
      email:new FormControl(),
    });
    submitted=false;

 }
// onSubmit(): void {
//   this.submitted = true;

//   if (this.form.invalid) {
//     return;
//   }

//   console.log(JSON.stringify(this.form.value, null, 2));
// }

// onReset(): void {
//   this.submitted = false;
//   this.form.reset();
// }
// }
