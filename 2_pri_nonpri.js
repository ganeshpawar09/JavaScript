//primitive
// this are callback types
// string ,number, boolean, null, undefined, symbol, bigint


// reference (non primitive)
// arry, object, funtion 

const myfun=function(){
    console.log("hello world");
}
console.log(typeof myfun);

myfun;
 

// stack(primitive) and head (non primitive)


let gamename=new String("timepass");
let gamename1=gamename;

gamename1="tm";
console.table([gamename, gamename1]);



