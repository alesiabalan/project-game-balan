const bubblesArray = [];

class Bubble {
    constructor() {
        this.x = miniPlane.x;
        this.y = miniPlane.y;
        this.size = Math.random() * 7 + 3;
        this.speedY = (Math.random() * 1) - 0.5;
        this.color = 'hsla(0, 0%,' + hue + '%, 0.8)';
    }
    update() {
        this.x -= gamespeed;
        this.y += this.speedY;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles() {
    bubblesArray.unshift(new Bubble);
    for (i = 0; i < bubblesArray.length; i++) {
        bubblesArray[i].update();
        bubblesArray[i].draw();
    }

    if (bubblesArray.length > 200) {
        for (let i = 0; i < 20; i++) {
            bubblesArray.pop(bubblesArray[i])
        }
    }
}