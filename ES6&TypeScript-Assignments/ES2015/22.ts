interface Printable
{
    print:string;
}
class circle implements Printable
{
    print!: string;
}
class employee implements Printable
{
    print!: string;
}
function printAll(obj:Printable)
{
    console.log(obj.print);
}
let myObj = { print: "Size 10 Object" };
printAll(myObj);

function printAl(obj:circle)
{
    console.log(obj.print);
}
let myObj1 = { print: "Size 10 Object" };
printAl(myObj1);

function print(obj:employee)
{
    console.log(obj.print);
}
let myObj2 = { print: "Size 10 Object" };
printAl(myObj2);
