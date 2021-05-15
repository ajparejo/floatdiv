/*let limitador = 30;
let contenedor = document.getElementById("contenedor");
let caja = document.getElementById("caja");

function transformar(x, y, el){
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / limitador;
    let calcY = (x - box.x - (box.width / 2)) / limitador;

    return "perspective(1000px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

function transformElement(el, xyEl) {
    el.style.transform  = transformar.apply(null, xyEl);
};

contenedor.onmousemove = function(e) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([caja]);
  
    window.requestAnimationFrame(function(){
      transformElement(caja, position);
    });
};*/

/*
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
*/

const caja = document.getElementById("caja");
const elementoCaja = caja.getBoundingClientRect();

caja.addEventListener('mousemove', e => {
    const posicionX = (e.clientX - elementoCaja.left) / elementoCaja.width;
    const posicionY = (e.clientY - elementoCaja.top) / elementoCaja.height - 0.6;
    const offsetX = -(posicionX - 0.6);
    const coordenadas = Math.min(Math.max(offsetX, -0.6), 0.6);
    caja.style.transform = `perspective(1000px) rotateY(${coordenadas*45}deg) rotateX(${posicionY*45}deg)`
});

caja.addEventListener('mouseleave', () => {
    caja.style.transform = 'none';
});