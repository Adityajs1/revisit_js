// function outerCount(){
//     let count = 0;

//     return function innerCount(){
//         count++;
//         console.log(count);        
//     }
// }
// const retVal = outerCount();
// console.log(retVal);
// retVal();
// retVal();


function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: (amount) => {
            balance += amount;
            console.log("Deposited", amount, "Balance:", balance);
        },

        withDraw: (amount) => {
            if (balance < amount) {
                console.warn("Insufficient Fund!");
            } else {
                balance -= amount;
                console.log("Withdrawn", amount, "Balance:", balance);
            }
        },

        checkBalance: () => {
            console.log("The current balance is:", balance);
        }
    };
} 

const AdiAccount = createBankAccount(1000);

AdiAccount.withDraw(300);   
AdiAccount.checkBalance();    
AdiAccount.deposit(500);      
AdiAccount.checkBalance();     

