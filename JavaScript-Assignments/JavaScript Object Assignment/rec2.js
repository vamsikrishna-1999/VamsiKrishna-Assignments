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
var rec=new rectangle(4,5);
document.write("1st Height="+rec.getHeight+"<br>");
document.write("1st Width="+rec.getWidth+"<br>");
rectangle.prototype.getArea=function()
{
        return this.width*this.height;
}  
rectangle.prototype.height=50;
document.write("2nd Height="+rec.getHeight+"<br>");
document.write("2nd Width="+rec.getWidth+"<br>");
document.write("2nd Area="+rec.getArea()+"<br>");
