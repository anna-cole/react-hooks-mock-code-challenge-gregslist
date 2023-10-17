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

  return (
    <div className="app">
      <Header search={search} onChangeSearch={e => setSearch(e.target.value)} />
      <ListingsContainer items={items} search={search} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
