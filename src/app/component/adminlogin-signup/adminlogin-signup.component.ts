import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { adminsignup,adminlogin } from '../contactmodel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin-signup',
  templateUrl: './adminlogin-signup.component.html',
  styleUrls: ['./adminlogin-signup.component.css']
})
export class AdminloginSignupComponent implements OnInit{
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router){}
  signupform!: FormGroup;
  loginform!: FormGroup;
  ngOnInit(): void {
    localStorage.removeItem("adminlogin")
    this.signupform = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.loginform = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    
  }
  showlogin = true;

  signuphere(){
    this.showlogin = false;
  }

  loginhere(){
    this.showlogin = true;
  }

  adminsignup(){
     this.http.post<adminlogin>("http://localhost:3000/signupadmin",this.signupform.value).subscribe(res=>{
      const user = res;
      if (res) {
        alert("user signed up successfully !!!!")
      } else {
        alert("Please try again")
      }
      this.signupform.reset();
    }, err => {
      // alert("something went wrong try after sometime")
      this.signupform.reset();
    
    })}
    

    loginuser(){
      this.http.get<adminsignup[]>("http://localhost:3000/signupadmin").subscribe(res=>{
        // matching email address and password
         const user = res.find((a:any)=>{
        return a.email === this.loginform.value.email && a.password === this.loginform.value.password;
      })
       // check condition for login
       if (user) {
        alert("successfully logged in");
        this.loginform.reset();
        this.router.navigate(["/admin-view"])
            // storing data in local storage
            localStorage.setItem('adminlogin', JSON.stringify(user))
      } else {
        alert("user not found with these credentials")
        this.loginform.reset();
      }
    }, err => {
       alert("something went wrong try after sometime")
      this.loginform.reset();

    })
  }
      
  
}
