//JSON-> javascript object notation 

//javascript object

// {
//     key:value
// }

//file format to store data in a structured way
//used to send data from server to client and vice versa
let user = {
    name: "John",
    age: 30,
    isAdmin: true,
    skills: ["JavaScript", "React", "Node.js"],
    address: {
        city: "New York",
        zip: "10001"
    }
}

const json = JSON.stringify(user); // converts the object to a JSON string

console.log(json)

const array = [3,4,5,6,7,8,1]

for(let i=0; i<array.length; i++){
    if(arr[i]%2==0){
        console.log(arr[i])
    }
}