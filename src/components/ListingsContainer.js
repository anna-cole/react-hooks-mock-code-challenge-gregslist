import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, search, onDeleteItem }) {
  const itemsToDisplay = 
  items.filter(item => search === '' || item.description.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <main>
      <ul className="cards">
        {itemsToDisplay.map(item => (
          <ListingCard key={item.id} item={item} onDeleteItem={onDeleteItem}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
