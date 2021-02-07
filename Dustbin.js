class Dustbin{
    constructor(x,y){
var options={
    isStatic:true
}
this.width=200
this.height=100
this.thickness=20
this.bwall=Bodies.rectangle(x,y,this.width,this.thickness,options)
this.lwall=Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,options)
this.rwall=Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,options)
World.add(world,this.bwall);
World.add(world,this.rwall);
World.add(world,this.lwall);
this.image=loadImage("images/dustbin.png");
World.add(world,this.image);
    }
display(){
    noStroke();
    fill("orange");
  rect(this.bwall.position.x,this.bwall.position.y,this.width,this.thickness);
  rect(this.lwall.position.x,this.lwall.position.y,this.thickness,this.height);
  rect(this.rwall.position.x,this.rwall.position.y,this.thickness,this.height);  
  imageMode(CENTER);
  image(this.image,0,0,this.r)
}
}