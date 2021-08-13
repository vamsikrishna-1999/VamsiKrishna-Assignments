class person
{
    constructor(fname,lname,age,skills,dob,address,married,profession)
    {
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        this.skills=skills;
        this.dob=dob;
        this.address=address;
        this.married=married;
        this.profession=profession;
    }
    get getlname()
    {
        return this.lname;
    }
    get getfname()
    {
        return this.fname;
    }
    get getage()
    {
        return this.age;
    }
    get getskills()
    {
        return this.skills;
    }
    get getdob()
    {
        return this.dob;
    }
    get getaddress()
    {
        return this.address;
    }
    get getmarried()
    {
        return this.married;
    }
    get getprofession()
    {
        return this.profession;
    }
}
var amitab=new person("amitab","bachan",22,"java","24/10/1996",{city:"hyderabad",pincode:"521185"},false,"sr.analyst");
var abhishek=new person("abhishek",amitab.getlname,21,"HTML","08/06/1971",amitab.getaddress,false,"jr.analyst");
var aaradhya=new person("aaradya",abhishek.getlname,20,amitab.getskills,"17/12/1999",amitab.getaddress,false,"jr.analyst");
print=function()
{
    console.log(amitab);
    console.log(abhishek);
    console.log(aaradhya);
}();
