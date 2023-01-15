<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego web</title>
    <meta name="descripcion" content="Juego 2D creado con JS">
    <meta name="Autoor" content="Manasés Jiménez">
</head>
<body>
    
    <div id="juego">
        <div id="pantalla-titulo">
        </div>
        <div id="pantalla-controles">
        </div>
        <div id="mapa">
        </div>
        <div id="jugador">
        </div>
        <div id="colisiones">
        </div>
        <div id="localizaciones">
        </div>
        <div id="popup">
        </div>
        <div id="inventario">
            <div id="cabecera">
                INVENTARIO
            </div>
            <div id="contenido" >
                contenido
            </div>
        </div>
    </div>
    <?php
        include_once 'app/cargadorArchivos.inc.php';
    ?>

   <!-- <script src="js/rectangulo.js"></script> -->
</body>
</html>