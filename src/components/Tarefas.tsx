import { Check, CheckCircle, Circle, Trash } from 'phosphor-react';
import React from 'react';
import { NoContent } from './NoContent';

import style from './Tarefas.module.css';

interface TarefaProps{
  isCompletada: boolean;
  descricao:string,
  deletarTarefa:(descricao: string)=>void;
  changeIsComplete:(descricao: string)=>void;
}

export function Tarefas({isCompletada,
     descricao,
     deletarTarefa,
     changeIsComplete}:TarefaProps){

  function handleDeletarTarefa(){
    deletarTarefa(descricao);
  }

  function handlechangeIsComplete(){
    changeIsComplete(descricao);
  }
  
  return (
    <div className={style.container}>
      {
        isCompletada 
        ?
        <Check size={16} className={style.checkCircle}  onClick={handlechangeIsComplete}/>
        :
        <Circle size={16} className={style.circle}  onClick={handlechangeIsComplete}/>
      }
        <p>{descricao}</p>
        
        <Trash 
          size={16} 
          className={style.trash}
          onClick={handleDeletarTarefa}
        />
    </div>
  );

}
