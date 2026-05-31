// function outer (){
//     let x = 10;

//     return function inner(){
//         console.log(x);
//     }
// }

// const func = outer();
// console.log(func());


function outerCount(){
    let count = 0;

    return function innerCount(){
        count++;
        console.log(count);        
    }
}

const retVal = outerCount();
retVal();
retVal();
retVal();

// Real world Use case of Closures

function createbankAccount(initialBalance){
       let balance = initialBalance;

       return{
        "deposit" : (amount)=>{
        balance += amount;
        console.log("Deposited:", amount, "Current Balance:", balance);
       },

       "withDraw" : (amount) =>{
        if(balance < amount){
            console.warn("Insufficient Fund!");
        }
        else{
            balance -= amount;
            console.log("Withdrawn:", amount, "Current Balance:", balance);
        }
       },

       "currentBalance" : ()=>{
        console.log("Current Balance:", balance);   
       }
       }
}

const AdityaAccount = createbankAccount(1000);
AdityaAccount.deposit(500);
AdityaAccount.currentBalance();
AdityaAccount.withDraw(1200);