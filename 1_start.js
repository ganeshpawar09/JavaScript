const nam="hello"; // it can to change 
var clas=9; //var is dynamic datatype miss we can change the data type anywhere 
// but the issue with var is it does not follow the scope
// hence the developer introduce the let variable it same as var but we have the scope functionality 
//in it

let div="1";

//js on it self try to help developer and debug on it self as we do not add ; but it on own add it 
// to correct the code 
//so when we not determine which data base its then it automatically make it let
roll_no=343;

console.log(typeof(roll_no));
console.log(typeof(clas));
console.log(typeof(div));
console.log(typeof(nam));

// if we just write let and not initialize it defaultly make it as undefined

let timepass;

console.log(typeof(timepass));


// below line to treat js code as newer version

"use strict";


/* 
number 
bigint 
boolean 
string 
null =>standalone value
undefine
symbol=>unique
object
*/
console.log();
console.log(typeof null);
console.log(typeof undefined);



// conversion
//strign to number
// "33"=>33;
// "33asd"=>NaN;
// null=>0;
// undefine=>NaN

