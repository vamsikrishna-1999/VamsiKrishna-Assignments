class rectangle
{
    constructor(width,height)
    {
        this.width=width;
        this.height=height;
    }
    get getHeight()
    {
        return this.height;
    }
    get getWidth()
    {
        return this.width;
    }
    
}
var rec=new rectangle(7,9);
document.write("1st Height="+rec.getHeight+"<br>");
document.write("1st Width="+rec.getWidth+"<br>");
rec1=new rectangle(10,20);
document.write("2nd Height="+rec.getHeight+"<br>");
document.write("2nd Width="+rec.getWidth+"<br>");