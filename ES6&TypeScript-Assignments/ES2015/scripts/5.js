"use strict";
let add = function (i, ii) {
    var res = i + ii;
    console.log("Add: " + res);
};
add(1, 2);
let userFriends = function (Name1, ...elements) {
    console.log("Username: " + Name1);
    console.log("List of friends:");
    for (let i in elements) {
        console.log(elements[i]);
    }
};
let friend = ['varun', 'hemanth', 'arun'];
let [Name1, ...elements] = friend;
let message = "Vamsi";
userFriends(message, ...elements);
let printCapitalnames = function (arr) {
    console.log("In capital letters");
    for (let i in arr) {
        console.log(arr[i].toUpperCase());
    }
};
let arr = ['vamsi', 'varun', 'anil', 'naveen', 'sai'];
printCapitalnames(arr);
