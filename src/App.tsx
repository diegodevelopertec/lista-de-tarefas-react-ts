import { useState } from 'react'
import * as  S from './App.styled'
import { Item } from './types/item'
import { ListItem } from './Components/listitem/ListItem'
import { AddArea } from './Components/listitem/ListItem/AddArea'

const App=()=>{


  const [list,setList]=useState<Item[]>([
    {id:1,name:'estudar React',done:true},
  {id:1,name:'estudar React',done:true}
  ])




  const HandleAddTask=(taskname:string)=>{
    let newList=[...list]
    newList.push({
     id:list.length + 1,
      name:taskname,
      done:false
    })
    
    setList(newList)
      }

  return (<>
  <S.Container>
    <S.Area>
      <S.Header>Lista de Tarefas</S.Header>
     <AddArea onEnter={HandleAddTask} />
      {list.map((item,key)=>(
        <ListItem key={key} item={item} ></ListItem>

      ))}
    </S.Area>

  </S.Container>
  
  
  
  
  
  
  
  </>)






}


export default App