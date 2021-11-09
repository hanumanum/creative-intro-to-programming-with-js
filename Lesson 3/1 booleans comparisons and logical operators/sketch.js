//1. Boolean
let tt = true
let ff = false

//2. համեմատության օպերատորներ  ( = > < >= <= != )

//3. համեմատության օպերատորներ ( === )
let a = 10
let b = "10"
let m = a === b
console.log(m)


//4. https://dorey.github.io/JavaScript-Equality-Table/

//5. Տրամաբանական օպերատորներ  ( &&, ||, ! )
let h = false
let e = true
let hr = !h
console.log(h, hr)

let u = h && e
console.log(u)

let v1 = 10
let v2 = 20
let v3 = "text"
let v4 = "20"
let v5 = 100

//6. Տրամաբանական արտահայտություններ
let vv1 = (v3 == v4) && (v3 != v4) && (v1 < v2)
console.log(vv1)

let vv2 = (v3 == v4) || (v3 != v4) || (v1 < v2)
console.log(vv2)

let vv3 = (v3 == v4) || (v3 != v4) && (v1 < v2)
console.log(vv3)

let vv4 = !((v3 == v4) || (v3 != v4)) && (v1 < v2)
console.log(vv4)
