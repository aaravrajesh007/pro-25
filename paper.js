class Paper{
constructor(x,y,r){
var options={
   restitution:0.8,
   friction:0.3,
   density:1.2,
}
this.r=r;
this.body=Bodies.circle(x,y,this.r,options);
World.add(world,this.body)
this.image=loadImage("images/paper.png")
}
display(){
   var pos=this.body.position;
   fill("blue");
   ellipseMode(RADIUS);
   ellipse(pos.x,pos.y,this.r,this.r)
   imageMode(CENTER);
   image(this.image, 0, 0, this.r);

}
}