const user = {
  name: "Khichak",
  age: 21,
  role: "admin",
  city: "Dadri"
};

const {name, role: userRole, ...meta} = user;
console.log(name);
console.log(userRole);
console.log(meta);

const updatedUser = {
    ...user,
    city : "Noida"
}
console.log(updatedUser);

function printUser({name, role}){
     console.log(`${name} has a role of ${role}`);
}
console.log(user);




