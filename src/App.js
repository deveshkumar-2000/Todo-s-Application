import React,{ useState } from 'react'
import './App.css';
import Todoinput from './components/Todoinput';
import TodoList from './components/TodoList';

function App() {
  const[listTodo, setListTodo]=useState([]);
  let addList=(inputText)=> {
    if(inputText!== '')
      setListTodo([...listTodo,inputText]);
  }

  const deleteListItem=(key)=>{
    let newlistTodo = [...listTodo];
    newlistTodo.splice(key,1)
    setListTodo([...newlistTodo])
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
        <Todoinput addList={addList}/>
        <h1 className='app-heading'> TODO </h1>
        <hr></hr>
        {
          listTodo.map((listItem,i)=>{
            return(
              <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
            )
          })
        }
          
      </div>
    </div>
  )
}

export default App