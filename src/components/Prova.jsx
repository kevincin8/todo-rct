  // function convertiInStringa(valroe){
  //   JSON.stringify(valroe)
  // }

  // function convertiInOggetto(valroe){
  //   JSON.parse(valroe)
  // }
import { useState, useEffect, use, createElement, useTransition } from "react";
import xIcon from "../assets/images/x-icon.png"
import tickIcon from "../assets/images/tick.png"

function Prova() {
  console.log( "componente renderizato" );
  const [inputValue, setInputValue] = useState("")
  const [arrayDiTask, setarrayDiTask] = useState([
    {
      id: 1,
      testo: "mangiare",
      completato: false,
    },
    {
      id: 2,
      testo: "pisciare",
      completato: false,
    },
    {
      id: 3,
      testo: "sborrare",
      completato: true,
    },
  ]) 

  const arrayDiTaskDaFare = arrayDiTask.filter(task => !task.completato)
  const arrayDiTaskCompletato = arrayDiTask.filter(task => task.completato)
  
  function completaTask(id){
    console.log( "sono il parametro id:",id );
    setarrayDiTask(prev => prev.map((task, index) => task.id == id ? {...task, completato: true} : task ))
    console.log( "task completato" );
  }
  
  function togliCompletamentoTask(id){
    console.log( "sono il parametro id della funzione togliCompletamentoTask:",id );
    setarrayDiTask(prev => prev.map((task, index) => task.id == id ? {...task, completato: false} : task))
  }
  
  useEffect(() => {
    console.log( arrayDiTask );
  }, [arrayDiTask])
  
  console.log( "input:",inputValue );
  
  function aggiungiTask(){
    setarrayDiTask(prev => [...prev, inputValue])
    console.log( "sono arrayDITask dopo il push:",arrayDiTask );
  }

  return (
    <>
    <div className="flex items-center gap-3 justify-center">
      <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} placeholder="aggiungi task" type="text" className="border-2 border-black p-2 px-5 block my-5 text-xl" />
      <button onClick={aggiungiTask} className="p-3 bg-green-400 px-7 font-bold">aggiungi</button>
    </div>

      <div className="flex items-items-center justify-center gap-10">
        {/* //! container task  da fare */}
        <div className="min-w-[500px]  flex flex-col items-center justify-center gap-3 border-2 shadow-[0px_0px_10px_1px] p-7">
          <h2 className="text-center font-bold text-2xl">task da fare</h2>
          {arrayDiTaskDaFare.map((task, i) => 
            
          //! card task
          <div key={i} className="flex items-center gap-7 shadow-[0px_0px_10px_1px] p-3 rounded-2xl">
            <h2 className="text-xl font-bold">{task.testo}</h2>
            
            {/* // ! container icone  */}
            <div className="flex items-center gap-2">
              <img onClick={() => {completaTask(task.id)}} className="w-[30px]  hover:scale-[1.2] transition-all duration-300" src={tickIcon} alt="" />
              <img onClick={() => {togliCompletamentoTask(task.id)}} className="w-[30px]" src={xIcon} alt="" />
            </div>
          </div>)}
        </div>
        
        {/* //! container task  completate */}
        <div className="min-w-[500px]  flex flex-col items-center justify-center gap-3 border-2 shadow-[0px_0px_10px_1px] p-7">
          <h2 className="text-center font-bold text-2xl">task completate</h2>
          {arrayDiTaskCompletato.map((task, i) => 

          //! card task
          <div key={i} className="flex items-center gap-7 shadow-[0px_0px_10px_1px] p-3 rounded-2xl">
            <h2 className="text-xl font-bold">{task.testo}</h2>

            {/* // ! container icone  */}
            <div className="flex items-center gap-2">
              <img onClick={() => {completaTask(task.id)}} className="w-[30px]  hover:scale-[1.2] transition-all duration-300" src={tickIcon} alt="" />
              <img onClick={() => {togliCompletamentoTask(task.id)}} className="w-[30px]" src={xIcon} alt="" />
            </div>
          </div>)}
        </div>
      </div> 
    </>
  );
}

export default Prova;