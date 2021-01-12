class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);

    this.image = loadImage("sprites/bird.png");
    this.smokeimg=loadImage("sprites/smoke1.png");
    this.trajectory=[];
    
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>240 && this.body.velocity.x>4 ){
    var position=[this.body.position.x,this.body.position.y]
    this.trajectory.push(position);
   

    for(var i=0;i<this.trajectory.length;i++){
     image(this.smokeimg,this.trajectory[i][0],this.trajectory[i][1],20,10); 
    }
  }



  }
}
