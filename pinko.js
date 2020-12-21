class pinko {
    constructor(x,y) {
      var options = {
        'restitution':0.8,
        'friction':0,
        'density':1.0,
        'isStatic':true
      }
      this.body = Bodies.circle(x,y,15,options);
     
      this.smokeImage=loadImage("obstacle.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("white");
     
     //  translate(this.body.position.x, this.body.position.y);
      ellipseMode(CENTER);

      ellipse(pos.x,pos.y, 20);
   
    }
    };
  