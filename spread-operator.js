let myObj = {
    'id': 1,
    'firstName': "Kevin",
    'lastName': "Camp"
}

let addEmail = {
    ...myObj,
    'email': "kcamp4632@yahoo.com"
}

console.table(addEmail);