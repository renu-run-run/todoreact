import { useState } from "react"

const TodoSim = () =>{
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);
   
    
    function addItem(){
        if(!newItem){
            alert("Enter an Item");
            return;
        }


        const item ={
            id: Math.floor(Math.random() * 1000),
            value:newItem
        };
        setItems(oldList => [...oldList,item ]);
        setNewItem("");
        
        
    }

    function deleteItem(id){
        const newArray = items.filter(item => item.id!== id);
        setItems(newArray);
    }

    
   
      
    return(
      <>
        <div>
           <h1>Todo List App</h1>
           <input type="text" placeholder="Add an item..."
              value={newItem}
              onChange={e => setNewItem(e.target.value)}/>&nbsp;
              <button onClick = {()=> addItem()}>➕</button>
              <ul>
                 {
                    items.map(item =>{
                        return(
                            <li key={item.id}>
                           
                            
                            {item.value}
                            <button onClick={()=> deleteItem(item.id)}>❌ </button>
                            </li>
                        )
                    })
                 }
              </ul>
        
        </div>
      
      </>

    )
}
export default TodoSim