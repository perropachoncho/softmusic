console.log(usuario.address)
;: // string
const mensaje = 'yep'
//number
const digito = 7.888
//boolean
const condicion = false
//array   es una lista de datos que se guardan de forma sucesiva
const mercado = [
    "tomates" ,
    "lechuga",
    "salsa de maiz",
    "yogurt",
    "pan"
]

// el object es un tipo de dato    que nos permite guardar valores dentro de el pero asignandole una clave especifica a cada valor
const usario = {
    email: "ramdavid@gmail.com",
    password:"90009000",
    username:"perropachon",
    address: {
        city: "Valencia",
        state: "Carabobo",
        street: "Madison",
        code: 404
    },
    children: [
        "juan",
        "pedro",
        "levi"
    ]

    const indefinido = undefined

    const vacio = null

}

const suma =(num1, num2) => {
   return num1 + num2
}

const validarUsuario = (usuario) => {
if (usario.email != null)
}

console.log(suma(5, 9))

if (1==2) {
    console.log("se cumple")
}
else {
    console.log("no se cumple")
}

axios.get("https//leonardoapi.onrender.com/songs")

.then(
    //datos que viene del servidor
    (res) => {
        console.log(res.data.songs)

        //recorrer las canciones

        res.data.songs.map(
            (song) => {
                //esto se repite por cada cancion
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