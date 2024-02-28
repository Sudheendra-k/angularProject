import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { DetailsService } from 'src/app/details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  result: any;
  loginForm: FormGroup
  public details = {
    fname: '',
    lname: '',
    phone: '',
    email: ''
  }
  constructor(private formBuilder: FormBuilder, private detailsService: DetailsService,private router: Router
    // private FormGroup: FormGroup
  ) {
    this.loginForm = this.formBuilder.group({
      fName: ['',Validators.required],
      lName: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]


    })

    for(let i = 1; i<= 20; i++){
      // console.log(i);
      if(i%2 !== 0){
        console.log(`${i} is a odd`)
      }else{
        // console.log('i is even',i)
      }
    }


  }

 

  doSubmit() {
    this.details.fname = this.loginForm.value.fName;
    this.details.lname = this.loginForm.value.lName
    this.details.email = this.loginForm.value.email
    this.details.phone = this.loginForm.value.phone

    console.log('sss',this.details)
    this.detailsService.setData(this.details);

    this.router.navigate(['/displayComponent']);



  }
}
