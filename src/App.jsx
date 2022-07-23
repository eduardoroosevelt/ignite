import { Header } from "./components/Header"
import {Post} from "./components/Post"
import { Sidebar } from "./components/Sidebar.jsx"

import './global.css'

import styles from './App.module.css'

const posts = [
  {
    id:1,
    author:{
      avatarUrl:'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: "CTO @ Rocketseat"
    },
    content: [
      { type:'paragraph', content:'Fala galeraa 👋'},
      { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type:'link', content:'jane.design/doctorcare'},       
    ],
    publishedAt: new Date('2022-07-03 20:00:00')
  },
  {
    id:2,
    author:{
      avatarUrl:'https://github.com/eduardoroosevelt.png',
      name: 'Eduardo Roosevelt',
      role: "Desenvolvedor"
    },
    content: [
      { type:'paragraph', content:'Fala galeraa 👋'},
      { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type:'link', content:'jane.design/doctorcare'},       
    ],
    publishedAt: new Date('2022-07-06 20:00:00')
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          
          {
            posts.map((el,i) =>{
              return ( 
                <Post 
                  key={el.id}
                  author={el.author}
                  content={el.content}
                  publishedAt={el.publishedAt}
                />
              )
            })
          }          
        </main>
      </div>
    </div>


  )
}

export default App
