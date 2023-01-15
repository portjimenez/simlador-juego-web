function Tile(xEnTile, yEnTile, z, ancho, alto, sprite){
    this.rectangulo = new Rectangulo(xEnTile, yEnTile, ancho, alto);
    this.zIndex = z;
    this.sprite = sprite;
    this.idHTML = "x" + xEnTile + "y" + yEnTile + "z" + z;
    this.html = '<div id="' + this.idHTML +'"></div>'; 
}

Tile.prototype.aplicarEstilos = function(){
    if(!document.getElementById(this.idHTML)){
        throw("el ID " + this.idHTML + " no existe ne la hoja");
    }

    document.getElementById(this.idHTML).style.position = "absolute";
    document.getElementById(this.idHTML).style.left = (this.rectangulo.x * this.rectangulo.ancho) + "px";
    document.getElementById(this.idHTML).style.top = (this.rectangulo.y * this.rectangulo.alto) + "px";
    document.getElementById(this.idHTML).style.width = this.rectangulo.ancho + "px";
    document.getElementById(this.idHTML).style.height = this.rectangulo.ancho + "px";
    document.getElementById(this.idHTML).style.zIndex = "" + this.zIndex;
    document.getElementById(this.idHTML).style.background = "url('" + this.sprite.rutaHojaOrigen + "')";

    var x = this.sprite.posicionEnHoja.x;
    var y = this.sprite.posicionEnHoja.y;

    document.getElementById(this.idHTML).style.backgroundPosition = "-" + x + "px -" + y + "px";
    document.getElementById(this.idHTML).style.backgroundClip = "border-box";
    document.getElementById(this.idHTML).style.outline = "1px solid transparent";
}
//usemos transform para usar "tanslate3d()" para haci mover el mapa y hacer que nuestro juego use la tarjeta de video
Tile.prototype.mover = function(x, y){
    document.getElementById(this.idHTML).style.transform = 'translate3d(' + x + 'px,' + y + 'px, 0)';// indicamos cada valor de x, y, z pero como el juego es 2d solo usamos x y siendo z = 0
}