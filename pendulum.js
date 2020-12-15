class Pendulum{
    constructor(x,y,color){
        var options = {
            restitution:1,
            friction:0,
            frictionAir:0.0,
            slop:1,
            inertia:Infinity
        }
        this.x=x
        this.y=y
        this.color=color
        this.body=Bodies.rectangle(this.x,this.y,40,40,options)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke()
        fill(this.color);
        ellipse(pos.x.pos.y,40,40);
        pop()
    }
}