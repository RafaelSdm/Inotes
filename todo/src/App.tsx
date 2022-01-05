import * as C from './App.styles'
import {useState} from 'react'
import {Item} from './types/item'
import {ListItem} from './components/ListItem';
import {AddArea} from './components/AddArea'


const App = () =>{

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'comprar um pao na padaria', done: false},
    {id: 2, name: 'comprar frutas na padaria', done: true}
  ])


  const handleAddTask = (taskName: string) => {

    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false

    });

    setList(newList)

  }

  return (

    <C.Container>

      <C.Area>
        <C.header>
          Inotes
        </C.header>

       <AddArea onEnter={handleAddTask}/>

        {list.map((item, index)  => (
         
         <ListItem key={index} item={item}/>
         
        ))}
      </C.Area>

    </C.Container>

  );
}



export default App;
