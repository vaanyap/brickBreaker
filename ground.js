class Ground 
{
  constructor(x, y, w,h,image) 
  {
    let options = {
     isStatic:true,
     restitution: 1.0,
     density: 1.0,
     friction: 0
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.image = image;
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    
    if (keyIsDown(65)) {
      console.log('no');
      pos.x= pos.x-10;
      console.log(pos.x,pos.y)
      
     //
     
    }
    /*if (keyIsDown(68)) {
      console.log('no');
      pos.x= pos.x+10;
      console.log(pos.x,pos.y)
     //
     
    }

*/
    rectMode(CENTER);
    noStroke();
    image(this.image, pos.x,pos.y, this.w, this.h);

  }

}