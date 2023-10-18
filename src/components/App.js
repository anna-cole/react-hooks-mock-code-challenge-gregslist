import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('') 

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
  items.filter(item => search === '' || item.description.toLowerCase().includes(search.toLowerCase()))

  function submitChangeText(search) {
    setSearch(search)
  } 

  return (
    <div className="app">
      <Header onChangeText={submitChangeText} />
      <ListingsContainer items={itemsToDisplay} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;