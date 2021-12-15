let obj1 = {
    "employee": {
        "name": "sonoo",
        "salary": 56000,
        "married": false
    },
    "owner": {
        "name": "gagoo",
        "salary": 1000000,
        "married": undefined
    }
}

console.log(obj1.employee.married)
console.log(obj1.employee.salary)
obj1.employee.married = true
obj1.employee.salary = 100000

console.log(obj1.employee.married)
console.log(obj1.employee.salary)

console.log(obj1.owner.salary)

let obj2 = [
    { "name": "Ram", "email": "Ram@gmail.com" },
    { "name": "Bob", "email": "bob32@gmail.com" }
]

console.log("-------------------------")
console.log(obj2[0].email)
console.log(obj2[1].name)


let obj3 = {
    "employees": [
        { "name": "Shyam", "email": "shyamjaiswal@gmail.com" },
        { "name": "Bob", "email": "bob32@gmail.com" },
        { "name": "Jai", "email": "jai87@gmail.com" }
    ]
}
console.log(obj3.employees[1].email)
console.log(obj3.employees[2].name)

let obj4 = {
    "Name": "Testasteron",
    "Mobile": 12345678,
    "Boolean": true,
    "Pets": ["Dog", "cat"],
    "Address": {
        "Permanent address": "USA",
        "current Address": "AU"
    }
}

console.log("----------------------------")
console.log(obj4.Pets[1])
console.log(obj4.Address["Permanent address"])

console.log(obj4.Name)
console.log(obj4["Name"])


let obj5 = {
    "users": [
        {
            "userId": 1,
            "firstName": "Krish",
            "lastName": "Lee",
            "phoneNumber": "123456",
            "emailAddresses": ["krish.lee@learningcontainer.com", "bablo@asdfasd.com"]
        },
        {
            "userId": 2,
            "firstName": "racks",
            "lastName": "jacson",
            "phoneNumber": "123456",
            "emailAddresses": ["racks.jacson@learningcontainer.com", "barbadura@marmankam.erg"]
        },
        {
            "userId": 3,
            "firstName": "denial",
            "lastName": "roast",
            "phoneNumber": "33333333",
        },
        {
            "userId": 4,
            "firstName": "devid",
            "lastName": "neo",
        },
        {
            "userId": 5,
            "firstName": "jone",
            "lastName": "mac",
        }
    ]
}


console.log("-----------------------------------------------")
console.log(obj5.users[1].emailAddresses[1])

if(obj5.users[2].emailAddresses){
    console.log(obj5.users[2].emailAddresses[1])
}


//let enemy = new Enemy(100,200, 100, "black", 25)
