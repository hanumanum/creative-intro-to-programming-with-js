let obj = {
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
            "firstName": "Denial",
            "lastName": "Roast",
            "phoneNumber": "33333333",
        },
        {
            "userId": 4,
            "firstName": "Devid",
            "lastName": "Neo",
        },
        {
            "userId": 5,
            "firstName": "Jone",
            "lastName": "Mac",
        }
    ],
    "loosers": [
        {
            "userId": 6,
            "firstName": "Mresh",
            "lastName": "Bee",
            "phoneNumber": "9889898",
            "emailAddresses": ["krish.lee@learningcontainer.com", "bablo@dddd.com"]
        },
        {
            "userId": 7,
            "firstName": "Gacks",
            "lastName": "Mbardo",
            "phoneNumber": "98221",
            "emailAddresses": ["mbard.gacks@saasdf.com", "bara@sagadaga.erg"]
        },
        {
            "userId": 8,
            "firstName": "Grahamnen",
            "lastName": "Gurgengem",
            "phoneNumber": "455552202",
        },
        {
            "userId": 9,
            "firstName": "Bro",
            "lastName": "Nabrodergen",
        },
        {
            "userId": 10,
            "firstName": "Harmas",
            "lastName": "Kasmandar",
        }
    ]
}

// FOR
console.log("-------------- for loop -----------------------")
for (let i = 0; i < obj.users.length; i++) {
    let fullName = obj.users[i].firstName + " " + obj.users[i].lastName
    console.log(fullName)
}


console.log("------------ for loop-------------------------")
for (let i = 0; i < obj.users.length; i++) {
    let fullName = obj.users[i].firstName + " " + obj.users[i].lastName
    let emails = ""

    if (obj.users[i].emailAddresses) {
        emails = obj.users[i].emailAddresses.join(", ")
    }

    console.log(fullName + ", emails: " + emails)
}


// FOR ARRAYS (iterates over array values, n is value)
console.log("----------- for ... of loop --------------------------")
let ddd = [5646, 565, 78, 780, 12, 56, 89, 12, 8555]
let sum = 0
for (let n of ddd) {
    console.log(n)
    sum+=n
}
console.log(sum)


// FOR OBJECT (iterates over object kesy, z is key)
console.log("-------------  for ... in ------------------------")
let obj1 = {
        "name": "sonoo",
        "salary": 56000,
        "married": false
}
for(let z in obj1){
    console.log(z, obj1[z])
}


console.log("---------------while loop------------------")
let dddd = [56, 65, 78, 2780, 12, 256, 589, 120, 85]
let i = 0 
while(i<dddd.length){
    console.log(dddd[i])
    i++
}