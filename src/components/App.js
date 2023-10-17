import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const [textInput, setTextInput] = useState('') 
  
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(items => setItems(items))
  }, [])

  function handleDeleteItem(deletedItem) {
    const updatedItems = items.filter(item => item.id !== deletedItem.id)
    setItems(updatedItems)
  }

  const itemsToDisplay = 
  items.filter(item => textInput === '' || item.description.toLowerCase().includes(textInput.toLowerCase()))

  return (
    <div className="app">
      <Header onSearchChange={setTextInput}/>
      <ListingsContainer items={itemsToDisplay} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
