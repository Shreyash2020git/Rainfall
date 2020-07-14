class drop {
  constructor(x, y, width, height,velocity) {
      var options = {
          'restitution':0.8
      }
      this.body = Bodies.rectangle(x, y, width, height,velocity, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("drop.png");
      this.velocity = this.velocity;
      World.add(world, this.body);
    }
    display(){
      push();
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y, this.width, this.height,this.velocity);
      pop();
    }
}