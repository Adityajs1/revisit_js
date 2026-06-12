// class MyClass{
//     static staticMethod(){
//         console.log(this);
//     }
// }
// MyClass.staticMethod()
class User{
    constructor(name, email){
        this.name = name
        this.email = email
    }
    greet(){
        console.log(`Hi, I am ${this.name}`);
    }

    static isValidEmail(email){
        return email.includes(".") && email.includes("#")
    }
}
const user = new User("Aditya", "aditya@email.com")
console.log(User.isValidEmail("fdsiff"));
