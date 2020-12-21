class streetlight {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,10,80,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("light.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };