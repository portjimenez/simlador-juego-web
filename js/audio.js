var audio = {
    musica: null,
    pista1: "./audio/pista1.mp3",
    pista2: "",
    volumen: 1,
    reproducir(rutaPista){
        if(audio.musica != null){
            audio.musica.pause();
            audio.musica.src="";
        }
        audio.musica = new Audio(rutaPista);
        audio.musica.volume = audio.volumen;
        
        //esto es para comprobar si la musica la permitio el navegador reproduce si lo permite y sino deja el mensaje de error
        audio.musica.play().then(function () {
            console.log('Se esta reproduciendo!');
        }).catch(function(error) {
            console.log('no se pudo reproducir.');
            console.log(error);
        });
    },
    pause(){
        audio.musica.pause();
        audio.musica.src="";
    }
};