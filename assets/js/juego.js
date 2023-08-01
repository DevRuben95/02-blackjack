
// 2c = two of cluds (treboles)
// 2D = two of Diamonds (treboles)
// 2H = two of hearts (treboles)
// 2S = two of  spades (treboles)



//multicursores

let deck =[];
const  tipos =["C","D","H","S"];
const especiales = ["A","J","Q","K"]

let puntosJungador = 0,
   puntosComputadora =0;


//referencia del html
const btnPedir = document.querySelector("#btnPedir");

const puntosHtml = document.querySelectorAll("small");
console.log(puntosHtml)
// Esta funcion crea un nuevo deck (nueva varaja)
const crearDeck =()=>{

     for (let i=2; i <= 10 ; i++)
     {
        for (let tipo of tipos)
        {
            deck.push(i + tipo);
        }
        
     }
    
     for (let tipo of tipos)
     {    for (let esp of especiales)
        {

            deck.push( esp + tipo);
        }
           
     }



    deck = _.shuffle(deck);


    // console.log(deck);

    return deck;
}


crearDeck();


// Esta funcion me permite  tomar una carta 
const pedirCarta = () => 
{    
    if (deck.length===0)
    {
       throw "No hay cartas en el deck" 
    }
    
    const carta = deck.pop();
    // console.warn("NUEVO1");
    // console.log(deck);
    // console.warn("NUEVO");
    //  console.log(carta); // carta debe ser de la baraja
      return carta;
}


// pedirCarta();

const valorCarta = (carta)=>
{
     let valor = carta.substring(0,carta.length -1);

     return  (isNaN(valor)) ? 
             (valor==="A") ? 11 : 10:
             puntos = valor *1;    // SE MULTIPLICA POR UNO PARA CONVERTIR EL VALOR TIPO ESTRING EN NUMERICO

}

// const valor = valorCarta(pedirCarta());

// console.log({valor : valor });



// para crear elementos html de manera dinamica:

// const divBotones = document.querySelector("#divBotones");
// undefined
// divBotones 
// <div id=​"divBotones" class=​"col text-center">​…​</div>​
// document.createElement("button");
// <button>​</button>​
// const  botonNuevo =  document.createElement("button");
// undefined
// botonNuevo 
// <button>​</button>​
// divBotones.append(botonNuevo);
// undefined
// botonNuevo.innerHTML ="nuevo";
// 'nuevo'
// botonNuevo.classList.add("btn-success");
// undefined
// botonNuevo.classList.add("btn");
// undefined



//eventos :


btnPedir.addEventListener("click",function(){

    const carta = pedirCarta();
    puntosJungador = puntosJungador + valorCarta(carta);
     console.log(puntosJungador);

     puntosHtml[0].innerText= puntosJungador;
});

