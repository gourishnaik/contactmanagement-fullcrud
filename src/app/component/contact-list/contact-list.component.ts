import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { contact, contactus } from '../contactmodel';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  data:any|contact[]
  searchText:any;

  constructor(private api: ApiService,private formBuilder: FormBuilder,) { }
  contactusform!: FormGroup;
  ngOnInit(): void {
   this.getcontact();
   
   this.contactusform = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required]
   })
  }
  getcontact(){
    this.api.getcontact().subscribe(res=>{
      this.data=res;
  
    })
  }

  //delete
  delete(id:number){
    this.api.deletecontact(id).subscribe(res=>{
      alert("contact deleted successfully!!")
      this.getcontact();
    })
  }
  logout(){
    localStorage.removeItem("logindata")
  }

  //submit contact us
  contactussubmit(data:contactus){
    this.api.contactus(data).subscribe((res => {
      alert("submitted successfully !!!")
      this.contactusform.reset();
    }))
  }
}

