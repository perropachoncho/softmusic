

axios.get("https://leonardoapi.onrender.com/songs")

.then(
    //datos que viene del servidor
    (res) => {
        const contenedor = document.getElementById('track-list')
        console.log(res.data.songs)

        //recorrer las canciones

        res.data.songs.map(
            (song) => {
                //esto se repite por cada cancion

                const songhtml = document.createElement('div')

                songhtml.innerHTML = `
                <img src="${song.path.front}" alt="icono de pausa">
                <div>
                    <h3>${song.title}</h3>
                    
                    <img src="/ASSETS/Group 7.svg" alt="tiempo de la canción">
                    <p>1:20/4:08</p>
                </div>
                `
                songhtml.addEventListener('click', () =>{
                    document.getElementById('current-song-audio').setAttribute('src', song.path.audio)
                    document.getElementById('current-song-img').setAttribute('src', song.path.front)

                    document.getAnimations('current.song.title')
                })

                contenedor.appendChild(songhtml)
          console.log(song)
            }
        )
    }
)

//Operadores logicos 
//&&        AND o tambien 'y'
// //       OR o tambien 'o'
//=         Asignacion
//
//==        comparacion igual
//!=         desigualdad
//>=        mayor o igual
//>         mayor
//<=        menor o igual
//<         menor
//Operadores Matematicos
//+        suma o adicion
//-        resta o sustraccion
//*        multiplicacion
//**       poteciacion
// /       division 
// %       ¿
// una funcion es un bloque de codigo que contiene una serie de instrucciones o sentencias
// una constante o variable es un espacio en memoria para guardar
// son como variables que sirven dentro de la funcion