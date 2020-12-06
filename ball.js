class ball {
    constructor(x,y){
        var option = {
            restitution: 0.5,
            friction: 0,
            frictionAir: 0.0,
            slop: 1,
            inertia: Infinity,
            density:2
        };
        this.body = Bodies.rectangle(x,y,60,60,option);  
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(255);
        ellipse(0,0,80,80);
        pop();
    }

}