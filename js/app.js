let limitador = 10;
let caja = document.getElementById("caja");
let ref = caja.getBoundingClientRect();

function transformar(x, y){
    let calcX = -(y - ref.y - (ref.height / 2)) / limitador;
    let calcY = (x - ref.x - (ref.width / 2)) / limitador;
    console.log(`${calcX}, ${calcY}`);

    caja.style.transform ="perspective(1000px) " + "   rotateX("+ calcX +"deg) " + "   rotateY("+ calcY +"deg) ";
};

caja.onmousemove = function(e) {
    let coordX = e.clientX;
    let coordY = e.clientY;

    window.requestAnimationFrame(function(){
        transformar(coordX, coordY);
    });
};

caja.mouseleave = function(e) {
    caja.style.transform = 'none';
};