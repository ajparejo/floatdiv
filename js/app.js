let limitador = 30;
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
};