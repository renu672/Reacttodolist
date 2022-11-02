
import { useState } from 'react';
import './App.css';
import Todolist from './Components/Todolist';

const App =() => {
  const [InputList, setInputList] = useState(" ");
  const [Items,setItems] = useState([]);

 const itemEvent = (event) =>{
       setInputList(event.target.value);

 };
 const listOfitem =() =>{
   setItems((olditems) => {
     return [...olditems,InputList];

   });
   setInputList(" ");

 };

 const deleteItem =  (id) => {
  setItems((olditems) => {
    return olditems.filter((arrElem, index)=>{
          return index !== id;
    })
  })
 };
  return (
    <div className="main">
       <div className='center-div'>
        <h1>ToDoList</h1>
      
          <input type="text" placeholder = 'Add a Items'
           value={InputList} 
           onChange={itemEvent}
           />

            <button onClick={listOfitem}>+</button>
          <ol>
           { Items.map( (itemval, index) => {
            return  <Todolist
             key={index}
              id={index} 
              text={itemval} 
              onSelect={deleteItem}
               />;

            })}
          </ol>
       </div>
    </div>
  );
}

export default App;
