// const tinderUser= new Object();
const tinderUser= {};

tinderUser.id="324324";
tinderUser.name="ganesh";
tinderUser.isloggedIn=false;

// console.log(tinderUser);


const obj1={
    name:{
        shortName:"Ganesh",
        fullName:{
            fistName:"Ganesh",
            lastName:"Pawar"
        }
    }
}
// console.log(obj1.name.shortName);
// console.log(obj1.name.fullName.lastName);

const obj2=Object.assign({},tinderUser,obj1);
const obj3={...tinderUser, ...obj1};
console.log(obj2);
console.log(obj3);

console.log("\n\n\n");
console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));

const obj4=[
{
    name:"ganesh"
},
{
    name:"ganesh"
},
{
    name:"ganesh"
},
{
    name:"ganesh"
},
{
    name:"ganesh"
},
{
    name:"ganesh"
},
]
console.log(obj4[1].name);

console.log(tinderUser.hasOwnProperty('islogged'));
console.log(tinderUser.hasOwnProperty('isloggedIn'));

const {isloggedIn : log}=tinderUser; // this way we can directly we use log
console.log(log);
