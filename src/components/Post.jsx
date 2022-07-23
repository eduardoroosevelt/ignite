import React, { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css'

export function Post({author, content, publishedAt}) {
  const [comments, setComments] = useState([
    "Post muito bacana, hein/?"
  ]);

  const [newCommentText,setNewCommentText] = useState('');
  
  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR',{
  //   day: '2-digit',
  //   month:'long',
  //   hour:'2-digit',
  //   minute:'2-digit',

  // }).format(publishedAt)

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale:ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale:ptBR,
    addSuffix:true
  })

  function handleCreateNewContent(){
    event.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  function handleNewCommentText(){
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete)
    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className={styles.post}>
      <header >
        <div className={styles.author}>
          <Avatar  src={author.avatarUrl}  />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
          </div>
        </div>

        <time 
          title= {publishedDateFormatted} 
          dateTime={publishedAt.toISOString()} 
        >
         {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map(el =>{
              if(el.type === 'paragraph'){
                return <p key={el.content}>{el.content}</p>
              }else if(el.type === 'link'){
                return <p key={el.content}><a href="#">{el.content}</a></p>
              }
          })
        }
      </div>

      <form onSubmit={handleCreateNewContent} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment"
          value={newCommentText}
          placeholder='Deixe seu comentário'
          onChange={handleNewCommentText}
        />
        
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment =>{
            return (
              <Comment
               key={comment}
               content={comment} 
               onDeleteComment={deleteComment}
              />
            )
          })
        }
      </div>
    </article>
  )
}


