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
rectangle.prototype.getArea=function()
    {
        return this.width*this.height;
    }
