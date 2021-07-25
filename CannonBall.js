//create a class for CannonBall
class CannonBall{
//create the constructor
constructor(x, y, r){
//define properties
this.x = x;
this.y = y;
this.r = r = 40;
//define behaviour of the object
var options = {
isStatic : true,
restitution : 0.8,
friction : 1,
density : 1
};
this.body = Bodies.circle(this.x, this.y, this.r, options);
this.image = loadImage("./assets/cannonball.png");
World.add(world, this.body);
}
//create the shoot function
shoot(){
//make the object constant with the angle of cannon
var velocity = p5.Vector.fromAngle(cannon.angle);
//multiply the velocity
velocity.mult(25);
//set the static state of object
Matter.Body.setStatic(this.body, false);
//set the velocity of the object
Matter.Body.setVelocity(this.body, {x : velocity.x, y : velocity.y});
}
//create the display function
display(){
//declare a variable
var angle = this.body.angle;
//declare a sample variable
var pos = this.body.position;
//create the push function
push();
//translate the values
translate(pos.x, pos.y);
//rotation of angle
rotate(angle);
//define the image mode
imageMode(CENTER);
//create a specific shape's blueprint
image(this.image, 0, 0, this.r, this.r);
//create the pop function
pop();
}
}