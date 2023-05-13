import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { contact } from '../contactmodel';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  data:any|contact[]
  searchText:any;

  constructor(private api: ApiService) { }
  ngOnInit(): void {
this.getcontact();

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
}

