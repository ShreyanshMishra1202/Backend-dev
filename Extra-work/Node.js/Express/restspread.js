// rest spread operator

const emp={
    id:1,
    name:"Alice",
    salary:50000,
    address:"delhi",
    age:28,
    department:"HR"
}

const empCopy={...emp};

const {id,name,salary,...rest}=emp;
console.log(rest);

console.log(empCopy);

// update the address
const updatedEmp={...emp,address:"mumbai"};
console.log(updatedEmp);