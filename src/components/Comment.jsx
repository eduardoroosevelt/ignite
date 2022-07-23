import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}){
  function handleDeletComment(){
    onDeleteComment(content)
  }

  return( 
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false}
        src="https://github.com/eduardoroosevelt.png" 
      />
      content
      <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Eduardo Roosevelt</strong>
                <time title=" 11 de Maio às 08:13 "dateTime="2022-05-11 08:13:30" >Cerca de 1h atrás</time>
              </div>
              <button onClick={handleDeletComment} title="Deletar comentário">
                <Trash size={24}/>
              </button>
            </header>

            <p>{content}</p>
          </div>

          <footer>
            <button>
              <ThumbsUp/>
              Aplaudir <span>20</span>
            </button>
          </footer>
      </div>
    </div>
  )
}
