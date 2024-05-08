function sayMyName()
{
    console.log("ganesh");
}
// sayMyName //reference
//  console.log(sayMyName);

// sayMyName(); // calling

// primitive data type are send by value and non-primitive send by reference (object, array, function)
// function change(str)
// {
//     str="abc";
// }

// const he="he";
// const she=new String("she");

// console.log(he);
// console.log(she);

// change(he);
// change(she);

// console.log(he);
// console.log(she);

// function calculateCartPrice(...num1) {
//     return num1;
// }

// console.log(calculateCartPrice(100,200,300,400));

// let chai= function()
// {
//     let username="Ganesh"
//     // console.log(this.username); 
// }   
// let chai1=()=>
// {
//     console.log(this);
// }
// console.log(this);


const arrowFunction=()=>{
    return "hello";
}
const arrowFunction1=()=>("hello");

console.log(arrowFunction());
console.log(arrowFunction1());

const myArray=[3432,4324,234,234324];

myArray.forEach((element)=>console.log(element/10));
const newArray=myArray.map((element)=>element%10);

console.log(newArray);


