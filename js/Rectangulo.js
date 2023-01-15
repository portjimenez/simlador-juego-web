function Rectangulo(x, y, ancho, alto, tipo){
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.idHTML = tipo + "x" + x + "y" + y;
    this.html = '<div id="' + this.idHTML + '"></div>';
    /*this.id = x + "r" + y;
    this.insertDOM();*/
};

/*Rectangulo.prototype.insertDOM = function(){
    var div = '<div id="' + this.id + '"></div>';
    var html = document.getElementById("juego").innerHTML;
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("juego").innerHTML = html + div;
    document.getElementById(this.id).style.position = "absolute";
    document.getElementById(this.id).style.left = this.x + "px";
    document.getElementById(this.id).style.top = this.y + "px";
    document.getElementById(this.id).style.width = this.ancho + "px";
    document.getElementById(this.id).style.height = this.alto + "px";
    document.getElementById(this.id).style.background = color;
};*/

Rectangulo.prototype.cruzar = function(rectangulo) {
    return (this.x < rectangulo.x + rectangulo.ancho && this.x + this.ancho > rectangulo.x && this.y < rectangulo.y + rectangulo.alto && this.alto + this.y > rectangulo.y) ? true : false;
}

Rectangulo.prototype.aplicarEstilosTemporal = function(colorHexadecimal){
    if(!document.getElementById(this.idHTML)){
        throw("el ID " + this.idHTML + " no existe en la hoja");
    }

    //var color = "#ff0000";
    document.getElementById(this.idHTML).style.backgroundColor = colorHexadecimal;

    document.getElementById(this.idHTML).style.position = "absolute";
    document.getElementById(this.idHTML).style.left = this.x + "px";
    document.getElementById(this.idHTML).style.top = this.y + "px";
    document.getElementById(this.idHTML).style.width = this.ancho + "px";
    document.getElementById(this.idHTML).style.height = this.ancho + "px";
    document.getElementById(this.idHTML).style.zIndex = "5";
}

Rectangulo.prototype.moverColisiones = function(x, y){
    document.getElementById(this.idHTML).style.transform = 'translate3d(' + x + 'px,' + y + 'px, 0)';// indicamos cada valor de x, y, z pero como el juego es 2d solo usamos x y siendo z = 0
}