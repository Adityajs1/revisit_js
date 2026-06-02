class MathUtils{
    static add(a, b){
        return a + b;
    }
}
// static makes the methods belong to the class itself not objects created with the class
let result = MathUtils.add(2, 3);
console.log(result);
