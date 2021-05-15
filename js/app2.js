let limitador = 10;
let caja = document.getElementsByClassName("caja");
for (let i = 0; i < caja.length; i++) {
    let ref = caja[i].getBoundingClientRect();
    function transformar(x, y){
        let calcX = -(y - ref.y - (ref.height / 2)) / limitador;
        let calcY = (x - ref.x - (ref.width / 2)) / limitador;
        console.log(`${calcX}, ${calcY}`);
        
        caja[i].style.transform ="perspective(1000px) " + "   rotateX("+ calcX +"deg) " + "   rotateY("+ calcY +"deg) ";
    };
    
    caja[i].onmousemove = function(e) {
        let coordX = e.clientX;
        let coordY = e.clientY;
        
        window.requestAnimationFrame(function(){
            transformar(coordX, coordY);
        });
    };

    caja[i].onmouseleave = function(e) {
        caja[i].style.transform = 'none';
    };
}
