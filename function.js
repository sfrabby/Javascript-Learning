function myfunction(){
    console.log('My function called');
}
myfunction()

let add = (a,b)=> a+b;

console.log(10,20);

function fun1 (firstName){
    function fun2(){
console.log('Hi iam'+firstName);

    }
    return fun2();
}
fun1('Rabby')
