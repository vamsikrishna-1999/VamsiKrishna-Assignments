const Book=
{
    id:1,
    title:"Future",
    price:200,
    printOrder:function()
    {
        console.log(Book.id);
        console.log(Book.title);
        
    },
    getprice:function()
    {
        console.log(Book.price);
    }
};
Book.printOrder();
Book.getprice();
const copied=Object.assign({},Book);
copied.printOrder();
copied.getprice();
