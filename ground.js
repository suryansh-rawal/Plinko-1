class ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution:1
      }
      this.body = Bodies.rectangle(x,y,width,50,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("gr.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
