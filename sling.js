class Sling{
    constructor(vbodyA,vpointB){
        var options = {
            bodyA:vbodyA,
            pointB:vpointB,
            length:10,
            stiffness:1,
            angularStiffness:1,
            length:220
        }
        this.pointB=vpointB
        this.pointX=vbodyA.x
        this.pointY=vbodyA.y-250
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }

    display(){
        var pointA=this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(3.5);
        stroke("#fff");
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
    }
}