export class User {
    constructor(_id='',firstname='',lastname='',age="",gender="",mobile=""){
        this._id=_id;
        this.firstname= firstname;
        this.lastname=lastname;
        this.age=age;
        this.gender=gender;
        this.mobile=mobile;

    }
    _id:string;
    firstname:string;
    lastname:string;
    age:string;
    gender:string
    mobile:string
}
