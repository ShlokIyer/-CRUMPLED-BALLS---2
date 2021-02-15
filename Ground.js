class Ground {

    constructor(x, y, w, h) {
        var ground_options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, w, h, ground_options);

        World.add(world, this.body)
        this.width = w;
        this.height = h;

    }

    display() {
        var pos = this.body.position;
        fill("yellow");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }


}