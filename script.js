const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
const layerWidth = 2400;
const currentSpeed = document.getElementById('animSpeed');
const speedRange = document.getElementById('animRange');

let SPEED = speedRange.value;

speedRange.addEventListener('change',(e)=>{
    currentSpeed.innerHTML = e.target.value;
    SPEED = e.target.value;
})

class layers {
    
    constructor(image,layerName, speedModifier ) {
        this.x=0;
        this.name = layerName;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = SPEED * speedModifier;
    }
    draw() {
        
        this.speed =   SPEED * this.speedModifier;
        if (this.x <= -2400) { this.x = 0; }

        ctx.drawImage(this.image, this.x, 0);
        ctx.drawImage(this.image, layerWidth + this.x, 0);

        this.x -= this.speed;
    }
}

const bgLayer1 = new Image();
bgLayer1.src = 'layers/layer-1.png';
const bgLayer2 = new Image();
bgLayer2.src = 'layers/layer-2.png';
const bgLayer3 = new Image();
bgLayer3.src = 'layers/layer-3.png';
const bgLayer4 = new Image();
bgLayer4.src = 'layers/layer-4.png';
const bgLayer5 = new Image();
bgLayer5.src = 'layers/layer-5.png';

const layer1 = new layers(bgLayer1, 'bg', 1);
const layer2 = new layers(bgLayer2, 'farBuildings',0.4);
const layer3 = new layers(bgLayer3, 'clouds',0.2);
const layer4 = new layers(bgLayer4, 'nearBuildings',0.6);
const layer5 = new layers(bgLayer5, 'ramp',1);

const layerObjects = [ layer1, layer2, layer3, layer4, layer5]



function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    layerObjects.forEach((object)=>{
        object.draw();
    })

    requestAnimationFrame(animate);
}

animate();