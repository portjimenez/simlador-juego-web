var mando = {
    objeto: null,
    eventoDisponible: 'ongamepadconnected' in window,
    conectar: false,
    iniciar: function(){
        if (mando.eventoDisponible){
            window.addEventListener("gamepadconnected", mando.conectar);
            window.addEventListener("gamepaddisconnected", mando.desconectar);
        }else{
            mando.actualizar();
        }
    },
    conectar: function(evento){
        mando.objeto = evento.gamepad;
        mando.identificar();
    },
    desconectar: function(evento){
        console.log("Mando desconectado del indice %d: %s", evento.gamepad.index, evento.gamepad.id);
    },
    actualizar: function(){
        if(!mando.eventoDisponible){
            mandos = null;

            try{
                mandos = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
                mando.objeto = mandos[0];
                if(!mando.conectar){
                    mando.conectar = true;
                    mando.identificar();
                }
            }catch(error){
                console.log(error.message);
            }
        }
        //comprobamos si el mando existe
        if(!mando.objeto){
            return;
        }
        //detectar botones del mando
        if(mando.botonPulsado(mando.objeto.buttons[0])){
            console.log("Mando: A");
        }
    },
    botonPulsado: function(boton){
        if(typeof(boton) == "object"){
            return boton.pressed;
        }
        return boton == 1.0;
    },
    identificar: function(){
        console.log("Mando conectado en el idice %d: %s. %d botones, %d ejes.", mando.objeto.index, mando.objeto.id, mando.objeto.buttons.length, mando.objeto.axes.length);
    }
};