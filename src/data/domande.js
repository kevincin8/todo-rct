import immagineDomanda1 from "../assets/images/personaggio-misterioso-nobg-.png"
import immagineDomanda2 from "../assets/images/copertina-sly-2.jpg"

import immagineOpzione1 from "../assets/images/livello-parigi-sly-2.webp"
import immagineOpzione2 from "../assets/images/livello-rajan-sly-2.jpg"
import immagineOpzione3 from "../assets/images/livello-contessa-sly-2.webp"
import immagineOpzione4 from "../assets/images/sly-cooper-nobg-.png"
import immagineOpzione5 from "../assets/images/bentley-nobg-.png"
import immagineOpzione6 from "../assets/images/murry-nobg-.png"

let arrayDiDomande = [
    {
      immagineDomanda: immagineDomanda1,
      domanda: "quale il primo livello di sly cooper 2?",
      opzioni: [
        {
          testo: "parigi",
          immagine: immagineOpzione1,
        },
        {
          testo: "india",
          immagine: immagineOpzione2,
        },
        {
          testo: "londra",
          immagine: immagineOpzione3,
        },
      ],
      rispostaCorretta: "parigi",
      difficolta: 1,
    },
  
    {
      immagineDomanda: immagineDomanda2,
      domanda: "quale il personaggio principale del gioco sly cooper?",
      opzioni: [
        {
          testo: "sly",
          immagine: immagineOpzione4,
        },
        {
          testo: "bentley",
          immagine: immagineOpzione5,
        },
        {
          testo: "murry",
          immagine: immagineOpzione6,
        },
      ],
      rispostaCorretta: "sly",
      difficolta: 1,
    },
  ];

export default arrayDiDomande