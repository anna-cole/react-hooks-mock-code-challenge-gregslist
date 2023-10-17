import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(items => setItems(items))
  }, [])

  return (
    <div className="app">
      <Header />
      <ListingsContainer items={items}/>
    </div>
  );
}

export default App;
