const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
const Constraint=Matter.Constraint;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;

function setup(){
    canvas= createCanvas(windowWidth/2,windowHeight/1.5);
    engine=Engine.create();
    world=engine.world;

    let canvasmouse= Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse:canvasmouse
    }
    mconstraint=MouseConstraint.create(engine,options);
    World.add(world,mconstraint);

    pendulum1 = new Pendulum(width-30,height-40,200);
    pendulum2 = new Pendulum(width-50,height-40,200);
    pendulum3 = new Pendulum(width-70,height-40,200);
    pendulum4 = new Pendulum(width-90,height-40,200);
    pendulum5 = new Pendulum(width-120,height-40,200);
}

function draw(){

    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

    Engine.update(engine);
}

function mouseDragged(){
    Matter.Body.setposition(pendulum1.body,{x:mouseX, y:mouseY});
}