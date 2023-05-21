import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { contactus } from '../contactmodel';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit{
  data:any|contactus[];
  constructor(private api:ApiService){}
  ngOnInit(): void {
   this.showcontactus();
  }
  logout(){
    localStorage.removeItem("adminlogin")
  }

showcontactus(){
  this.api.displaycontactus().subscribe(res=>{
    this.data=res;
    console.log(res)
  })
}

delete(id:number){
this.api.deletequery(id).subscribe(res=>{
  alert("contact deleted successfully!!");
  this.showcontactus()
})

}
}
