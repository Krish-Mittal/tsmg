class mainwall
{
    constructor(x,y,w,h)
    {
     this.x=x;
     this.y=y;
     this.w=w;
     this.h=h;
    
    }
    display()
    {
        fill("yellow")
       rect(this.x,this.y,this.w,this.h);
    }
} 