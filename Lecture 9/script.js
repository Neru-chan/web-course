function User (name)
{
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Вася");

console.log(user.name);
console.log(user.isAdmin);