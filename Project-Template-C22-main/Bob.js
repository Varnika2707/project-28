class Bob {
    //properties
    constructor(x,y,r){
        var options = {
            isStatic: false,
		    restitution:0.5,
		    friction:0,
		    density:0.7
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }

    //functions/methods
    display(){
        //namespacing
        var pos = this.body.position;

        fill("white")
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y,this.r,this.r)

    }
}