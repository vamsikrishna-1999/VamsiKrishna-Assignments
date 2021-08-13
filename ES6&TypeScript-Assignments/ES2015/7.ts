let array = [1,2,3,4];
let [ele1, ele2, ele3, ele4] = array;
console.log("3rd element: ",ele3);

var organization = {
    nameObj: "Capgemini",
    address: { country: "France", pincode: 75017}
}
console.log("deep match destructured pincode: ",organization.address.pincode);
