import arrayDiDomande from "../data/domande";
import { useState } from "react";

function GiocoCarte() {
  const [indiceDomandaCorrente, setIndiceDomandaCorrente] = useState(0);
  const [opzioneScelta, setOpzioneScelta] = useState(null)
  const [messaggioErrore, setMessaggioErrore] = useState(null)

  const domandaCorrente = arrayDiDomande[indiceDomandaCorrente];


  function prossimaDomanda(){
    if(indiceDomandaCorrente + 1 >= arrayDiDomande.length) {
      setMessaggioErrore("le domande sono finite")
      console.log( "coglione del cazzo succhia lo scroto" );
    } 
    else {
      setIndiceDomandaCorrente(prev => prev + 1)     
    } 
    // console.log( "sono indiDomandaCorrente prima del click", indiceDomandaCorrente );

    // console.log( "sono indiDomandaCorrente dopo il click", indiceDomandaCorrente );

    // console.log( "domandaCorrente dopo il click:",domandaCorrente );
  }
  
  function scegliOpzione(e){
    setOpzioneScelta(e.target.textContent)
    console.log( "sonno opzione scelta:",opzioneScelta );
  }
  
  
  function convalidaOpzione(){
    if(opzioneScelta == domandaCorrente.rispostaCorretta) {
      setMessaggioErrore("")
      prossimaDomanda()
    }
    else {
      console.log( "mi dispicae ma la risposta era sbaglita" );
      setMessaggioErrore("Risposta sbalgita")
    }
  }

  return (
    <>
      <div className=" w-[300px] shadow-[0px_0px_10px_1px] mx-auto mt-6 rounded-2xl">
        <img className="w-full rounded-2xl" src={domandaCorrente.immagineDomanda} alt="" />
        <h2 className="text-2xl font-bold p-2">{domandaCorrente.domanda}</h2>
      </div>

      <div className="flex items-center gap-6 justify-center mt-7">
        {domandaCorrente.opzioni.map(opzione => 
        <div className={`shadow-[0px_0px_10px_1px] rounded-2xl w-[293px] ${opzioneScelta == opzione.testo ? 'shadow-blue-500' : 'shadow-black'}`}>
          <img className="h-[164px] rounded-2xl w-full" src={opzione.immagine} alt="" />
          <h2 onClick={scegliOpzione} className="text-center font-bold">{opzione.testo}</h2>          
        </div> )}
      </div>
    
      {messaggioErrore && <p className="text-red-400 font-bold text-center mt-6 text-3xl">{messaggioErrore}</p>}

      <button onClick={convalidaOpzione} className="p-3 bg-green-400 mx-auto block mt-7 font-bold text-xl px-7 rounded-[10px]">avanti</button> 
    </>
  );
}

export default GiocoCarte