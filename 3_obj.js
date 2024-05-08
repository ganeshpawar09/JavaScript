// singleton
// Object.create


// Object literal

const syb= Symbol('123');

const jsUser={
    name: "Ganesh",
    [syb]:"23", // use to denote symbol in object
    "full name": "Ganesh Avachit Pawar",
    Age: 32

}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"])
// console.log(jsUser[syb]);
// console.log(typeof jsUser[syb]);
// console.log(jsUser.full name) this can not give error


jsUser.greeting=function()
{
    console.log("Hello jsUser");
}
jsUser.greeting1 = function() {
    console.log(`dsfdf4 ${jsUser.name}`);
};

console.log(jsUser.greeting);   
jsUser.greeting();
jsUser.greeting1();

// jsUser.name="timepass";
// console.log(jsUser.name);

// Object.freeze(jsUser); //after this no change will be occur on jsUser
// console.log(jsUser.name);

// jsUser.name="Ganesh";

// console.log(jsUser);
