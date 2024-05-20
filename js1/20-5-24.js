//synchronous
function findUser(userId) {
    let arr = [{
        id: 1,
        name: "shanks",
        place:"kerala",
    },
    {
        id: 2,
        name: "mark",
        place:"tamil nadu",
    },
    {
        id: 3,
        name: "tony",
        place:"karnataka",
    }
];

let user = arr.find((usr) => usr.id === userId);
return user;
}

let user = findUser(2);
console.log("user : ", user);




async function getuser(){
//Asynchronous

function findUser1(userId) {
    return new Promise((resolve, reject) => {
        let arr = [{
            id: 1,
            name: "shanks",
            place:"kerala",
        },
        {
            id: 2,
            name: "mark",
            place:"tamil nadu",
        },
        {
            id: 3,
            name: "tony",
            place:"karnataka",
        }
    ];
    
    setTimeout(function () {
        let user1 = arr.find((usr) => usr.id === userId);

        if(user1){
            resolve(user1);
        }else {
            reject("user not found");
        }
    }, 5000);
    })

}
try{
    let user1 = await findUser1(3);
    console.log("user1 : ",user1);
} catch (error){
    console.log("error : ", error.message ? error.message : error);
}

// let user1 = findUser1(3)
//     .then((user) => {
//         console.log("user : ", user);
//         return "Hai" + user.name
//     })
//     .then((user1) => {
//         console.log("user1 : ", user1);
//         hfhfjgkj;
//         return user1 + " , you are welcome"
//     })
//     .then((user2) => {
//         console.log("user2 : ", user2);
//     })
//     .catch((error) => {
//         console.log("error : ", error.message ? error.message : error);
//     })

}

getuser();