import { PlusCircle } from 'phosphor-react';
import React, { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import style from './NewTodo.module.css';

interface NewTodoProps{
  onAdicionarTarefa : (descricao: string) => void;
}

export function NewTodo({onAdicionarTarefa}:NewTodoProps) {

  const [descricaoTarefa, setDescricaoTarefa] = useState("");

  function onCriarTarefa(event: FormEvent){
    event.preventDefault();
    onAdicionarTarefa(descricaoTarefa)
    setDescricaoTarefa("");
  }
  
  function handleChangeNewTarefa(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity("")
    setDescricaoTarefa(event.target.value)
  }

  function handleNewTarefaInvalid(event: InvalidEvent<HTMLInputElement>){
     event.target.setCustomValidity("Este campo é obrigatório")
  }

  return (
    <form onSubmit={onCriarTarefa} className={style.container}>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa'
        required
        value={descricaoTarefa}
        onChange={handleChangeNewTarefa}
        onInvalid={handleNewTarefaInvalid}
      />
       <button type="submit" >
        Criar
        <PlusCircle size={16} />
      </button>
    </form>  
  );
}
