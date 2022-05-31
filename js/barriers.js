const barriersArray = [];

class Barrier {
    constructor() {
        this.top = (Math.random() * canvas.height / 3) + 20;
        this.bottom = (Math.random() * canvas.height / 3) + 20;
        this.x = canvas.width;
        this.width = 50;
        this.color = 'hsla(0, 0%,' + hue + '%, 0.8)';;
        this.counted = false;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    }
    update() {
        this.x -= gamespeed;
        if (!this.counted && this.x < miniPlane.x) {
            score++;
            this.counted = true;
        }
        this.draw();
    }
}

function handleObstacles() {
    if (frame % 50 === 0) {
        barriersArray.unshift(new Barrier);
    }
    for (let i = 0; i < barriersArray.length; i++) {
        barriersArray[i].update();
    }
    if (barriersArray.length > 20) {
        barriersArray.pop(barriersArray[0]);
    }
}