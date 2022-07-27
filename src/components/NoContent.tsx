
import style from './NoContent.module.css';
import  Clipboard  from '../assets/Clipboard.png';

export function NoContent(){

  return (
    <div className={style.container}>
    <img src={Clipboard} alt="" />
    <div className={style.containerMessage}>
      <p><span>Você ainda não tem tarefas cadastradas </span>
        Crie tarefas e organize seus itens a fazer</p>
    </div>
      {/* <span>Você ainda não tem tarefas cadastradas</span>
      <span>Crie tarefas e organize seus itens a fazer</span> */}
  </div>
  )
}