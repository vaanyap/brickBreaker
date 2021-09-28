class Ball {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: false,
      gravity: false
    };
    this.r = 20;
  
    this.body = Bodies.circle(x, y, this.r, options);
    World.add(world, this.body);
    } 
  
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r, this.r);
    pop();
  }
}
