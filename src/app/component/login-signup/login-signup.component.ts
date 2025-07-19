import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { signup, login } from '../contactmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  signupform!: FormGroup;
  loginform!: FormGroup;
  ngOnInit(): void {
    // userdata should not be stored in localstorage
    localStorage.removeItem("logindata")
    localStorage.removeItem("adminlogin")
    
    this.signupform = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    // login
    this.loginform = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  isshow = false;

  signup() {
    this.isshow = true;
  }
  login() {
    this.isshow = false;
  }

  submitsignup() {
    this.http.post<signup>("http://localhost:3000/signup", this.signupform.value).subscribe(res => {
      const user = res;
      if (res) {
        alert("user signed up successfully !!!!")
      } else {
        alert("Please try again")
      }
      this.signupform.reset();
    }, err => {
      // alert("something went wrong try after sometime")
      this.loginform.reset();
      // alert("something went wrong !!")
       this.router.navigate(["/server-error"])
    })
  }

  loginuser() {
    this.http.get<login[]>("http://localhost:3000/signup").subscribe(res => {
   console.warn(res)
      const user = res.find((a: any) => {
        console.warn(a)
        return a.email === this.loginform.value.email && a.password === this.loginform.value.password;
      })
   

      if (user) {
        alert("successfully logged in");
        this.loginform.reset();
        this.router.navigate(["/contactlist"])
        // storing data in local storage
        localStorage.setItem('logindata', JSON.stringify(user))
      } else {
        alert("user not found with these credentials")
        this.loginform.reset();
      }
    }, err => {

      this.loginform.reset();
      this.router.navigate(["/server-error"])
    })
  }

  adminlogin(){
    // routerLink="/adminlogin-signup"
   
      this.router.navigate(['/adminlogin-signup']);
    
    

}
}
