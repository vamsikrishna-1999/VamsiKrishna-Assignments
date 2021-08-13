"use strict";
var num = 0;
const resetArmstrong = () => {
    num = 0;
};
const getNextArmstrong = () => {
    num++;
    var count = 0;
    var num1;
    while (count != 1) {
        num1 = num.toString();
        if (num1.length == 1) {
            var res = num * num * num;
            if (res == num) {
                count++;
                console.log(num);
            }
            else {
                num++;
            }
        }
        else if (num1.length > 1) {
            var len = num1.length;
            var arra = new Array(len);
            for (let i = 0; i < len; i++) {
                arra[i] = parseInt(num1.charAt(i));
            }
            var res1 = 0;
            for (let i = 0; i < len; i++) {
                res1 = res1 + (arra[i] * arra[i] * arra[i]);
            }
            if (res1 == num) {
                count++;
                console.log(num);
            }
            else {
                num++;
            }
        }
    }
};
getNextArmstrong();
getNextArmstrong();
resetArmstrong();
getNextArmstrong();
getNextArmstrong();
