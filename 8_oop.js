// const user = {
//   useName: "ganesh",
//   age: 54,
//   isLoggedIn: false,

//   getUserName: function () {
//     return this.useName;
//   },
//   getAge: () => this.age,
// };

// console.log(user.getAge);

// function user(userName, age, isLoggedIn) {
//   this.userName = userName;
//   this.age = age;
//   this.isLoggedIn = isLoggedIn;

//   return this;
// }

// const user1 = new user("ganesh", 32, false);
// const user2 = new user("ganesh1", 332, false);
// console.log(user1);
// console.log(user2);

class user {
  constructor(userName, age, isLoggedIn) {
    this.userName = userName;
    this.age = age;
    this.isLoggedIn = isLoggedIn;
  }
}

const user1 = new user("ganesh", 32, false);
const user2 = new user("ganesh1", 332, false);
console.log(user1);
console.log(user2);
