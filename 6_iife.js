//Immediately Invoked Function Expressions(IIFE)

// (function chai(){
//     console.log("hello2");
// })();
// ((name)=>{
//     console.log("hello2"+`${name}`);
// })("sdfdsf");

// console.log("Sdfsdf");
function chai()
{
    console.log("hello");
    console.log(this);
    // console.log(globalThis);
}

// chai();

console.log(this);
console.log(globalThis);