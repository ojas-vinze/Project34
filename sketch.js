const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
const Constraint=Matter.Constraint;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;

function setup(){
    canvas= createCanvas(1200,570);
    engine=Engine.create();
    world=engine.world;

    let canvasmouse= Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse:canvasmouse
    }
    mconstraint=MouseConstraint.create(engine,options);
    World.add(world,mconstraint);

    pendulum1 = new Pendulum(220,100,0);
    pendulum2 = new Pendulum(260,100,0);
    pendulum3 = new Pendulum(300,100,0);
    pendulum4 = new Pendulum(340,100,0);
    pendulum5 = new Pendulum(380,100,0);

    sling1 = new Sling(pendulum1.body,{x:220,y:60});
    sling2 = new Sling(pendulum2.body,{x:260,y:60});
    sling3 = new Sling(pendulum3.body,{x:300,y:60});
    sling4 = new Sling(pendulum4.body,{x:340,y:60});
    sling5 = new Sling(pendulum5.body,{x:380,y:60});
}

function draw(){

    background("lightgrey")

    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();

    Engine.update(engine);
}

function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body,{x:mouseX, y:mouseY});
}
