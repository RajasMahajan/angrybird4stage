class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.image1=loadImage("sprites/sling1.png");
        this.image2=loadImage("sprites/sling2.png");
        this.image3=loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
       image(this.image1,200,65,50,155);
       image(this.image2,170,60,50,100);
    

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke('#301608');
            if(pointA.x<220){
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                line (pointA.x,pointA.y,pointB.x+30,pointB.y);
                image(this.image3,pointA.x-23,pointA.y-10,15,30);
            }
            else{
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                line (pointA.x,pointA.y,pointB.x+30,pointB.y);
                image(this.image3,pointA.x+23,pointA.y-10,15,30);
            }
           
        }

    }
    
}