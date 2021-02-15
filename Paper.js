class Paper {
    constructor(x, y, radius) {
        this.image = loadImage("paper.png");
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0,
            'isStatic': false
        }
        this.radius = radius
        this.body = Bodies.circle(x, y, (this.radius - 20) / 2, options);
        World.add(world, this.body);


    }
    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        fill("blue");
        //ellipseMode(RADIUS);
        //ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        imageMode(CENTER)
        image(this.image, 0, 0, this.radius, this.radius);
        pop()
    }
}