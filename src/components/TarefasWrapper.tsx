import React from 'react';
import {Tarefas} from './Tarefas';
import TarefasHeader from './TarefasHeader';

import style from './TarefasWrapper.module.css';
import { NoContent } from './NoContent';

interface Tarefa {
  descricao:string;
  isCompleta:boolean;
}

interface TarefasProps{
  tarefas:Tarefa[],
  setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>
}

export function TarefasWrapper({ tarefas, setTarefas }:TarefasProps){

  const isNoContent = tarefas.length === 0;

  const totalTarefas = tarefas.length;
  const totalTarefasConcluidas = tarefas.filter(e => e.isCompleta).length;

  function deletarTarefa(descricao: string){
    let newListTarefa = tarefas.filter(e => e.descricao !== descricao);
    setTarefas(newListTarefa)
  } 

  function changeIsComplete(descricao: string){
    let newListTarefa = tarefas.map(e => {
      if(e.descricao === descricao){
        return {
          ...e,
          isCompleta:!e.isCompleta
        }
      }
      return e
    })

    setTarefas(newListTarefa)
  } 

  return (
    <div className={style.container}>
      <TarefasHeader totalTarefas={totalTarefas} totalTarefasConcluidas={totalTarefasConcluidas}/>

      {
        isNoContent && <NoContent/>
      }

      {
        tarefas.map((tarefa, index) =>(
          <Tarefas
              descricao={tarefa.descricao}
              isCompletada={tarefa.isCompleta}
              key={tarefa.descricao}
              changeIsComplete={changeIsComplete}
              deletarTarefa={deletarTarefa}
          />
        ))
      }
     
    </div>
  )

}
