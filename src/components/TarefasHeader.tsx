import React from 'react';

import style from './TarefasHeader.module.css';

interface TarefasHeaderProps{
  totalTarefas: number;
  totalTarefasConcluidas:number;

}
export function TarefasHeader({totalTarefas = 0,totalTarefasConcluidas = 0}:TarefasHeaderProps){

  const txtTotalTarefasConluidas = totalTarefasConcluidas == 0 ? '0' : `${totalTarefasConcluidas} de ${totalTarefas}`
  return (
    <div className={style.container}>

      <div className={style.criados}>
        <span>Tarefas criadas </span>
        <span>{totalTarefas}</span>
      </div>

      <div className={style.concluidos}>
        <span>Concluídas </span>
        <span>{txtTotalTarefasConluidas}</span>
      </div>
    </div>
  )
}

export default TarefasHeader;