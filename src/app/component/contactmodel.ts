export class contact{
    firstname?:string;
    lastname?:string;
    phonenumber?:number;
    city?:string;
    id!:number;
}

export class signup {
    name?:string;
    email?:string;
    password?:string;
}
export class login{
    email?:string;
    password?:string;
}
export class contactus{
    name?:string;
    email?:string;
    message?:string;
}
export class adminsignup{
    name?:string;
    email?:string;
    password?:string;
}
export class adminlogin{
    email?:string;
    password?:string;
}