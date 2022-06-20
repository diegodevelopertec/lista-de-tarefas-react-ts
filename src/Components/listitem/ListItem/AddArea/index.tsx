import { KeyboardEventHandler, useState } from 'react'
import * as  S from './style'

type Props={
onEnter:(taskname:string)=>void
}
export const AddArea=({onEnter}:Props)=>{
const [inputText,setInputText]=useState('')

const handleKeyUp=(e:any)=>{
if(e.code=== 'Enter' && inputText!== ''){

onEnter(inputText)
setInputText('')


}


}

return (
    <S.Container>
        <div className="image">+</div>
         <input type="text" name="" id="" placeholder="Adicione uma tarefa" 
         value={inputText} 
         onChange={e=>setInputText(e.target.value)}
         onKeyUp={handleKeyUp} />



 </S.Container>

)




}