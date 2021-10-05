class Box{
    constructor(x,y,w,h){
        var options={
            restitution:0.4,
            isStatic:true


        }
this.body=Bodies.rectangle(x,y,w,h,options)

this.w= w;
 this.y= y;


World.add(world, this.body)


  }
  display() {
var pos= this.body.position;
var angle= this.body.angle;
rectMode(CENTER)
fill ("red");
rect(pos.x, pos.y,this.width,this.height);

  }
};
