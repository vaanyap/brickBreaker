class Brick 
{
  constructor(x, y, w,h,image) 
  {
    let options = {
     isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.image = image;
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill(148,127,146);
    image(this.image, pos.x,pos.y, this.w, this.h);
    pop();
  }
}