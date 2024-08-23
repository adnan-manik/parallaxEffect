const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
const layerWidth = 2400;
const SPEED = 5;


const layer1 = new Image();
layer1.src = 'layers/layer-1.png';
const layer2 = new Image();
layer2.src = 'layers/layer-2.png';
const layer3 = new Image();
layer3.src = 'layers/layer-3.png';
const layer4 = new Image();
layer4.src = 'layers/layer-4.png';
const layer5 = new Image();
layer5.src = 'layers/layer-5.png';


let x = SPEED;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(layer1, x, 0);
    ctx.drawImage(layer1, layerWidth+x, 0);

    ctx.drawImage(layer2, x, 0);
    ctx.drawImage(layer2, layerWidth+x, 0);

    ctx.drawImage(layer3, x, 0);
    ctx.drawImage(layer3, layerWidth+x, 0);

    ctx.drawImage(layer4, x, 0);
    ctx.drawImage(layer4, layerWidth+x, 0);

    ctx.drawImage(layer5, x, 0);
    ctx.drawImage(layer5, layerWidth+x, 0);
    
    if(x<=-2400){ x=0;}
    
    x -= SPEED;
    requestAnimationFrame(animate);
}

animate();