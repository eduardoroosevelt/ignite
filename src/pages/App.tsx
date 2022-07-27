import { useState } from 'react'
import Header from '../components/Header'
import {NewTodo} from '../components/NewTodo'
import {TarefasWrapper} from '../components/TarefasWrapper';

import "../global.css"
import style from './App.module.css';

interface Tarefa {
  descricao:string;
  isCompleta:boolean;
}

const mock = [
  {descricao: 'Tarefas1', isCompleta:false },
  {descricao: 'Tarefas2', isCompleta:true },
  {descricao: 'Tarefas3', isCompleta:false },
  {descricao: 'Tarefas4', isCompleta:true },

]
function App() {
  
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  function onAdicionarTarefa(descricao:string){
    let newTarefa : Tarefa ={
      descricao,
      isCompleta:false
    }

    setTarefas(oldTarefas =>{
      return [...oldTarefas, newTarefa]
    })
  }

  return (
    <div className={style.container}>
      <Header />
      <NewTodo onAdicionarTarefa={onAdicionarTarefa}/>
      <TarefasWrapper tarefas={tarefas} setTarefas={setTarefas}/>
    </div>
  )
}

export default App
