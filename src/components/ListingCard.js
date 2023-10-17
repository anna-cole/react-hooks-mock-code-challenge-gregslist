import React, { useState } from "react";

function ListingCard({ item, onDeleteItem }) {
  const [favorite, setFavorite] = useState(false)

  function onClickFavorite() {
    setFavorite(favorite => !favorite);
  }

  function onClickDelete() {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(() => onDeleteItem(item))
  }
  
  return (
  <li className="card">
    <div className="image">
      <span className="price">$0</span>
      <img src={item.image} alt={item.description} />
    </div>
    <div className="details">
      {favorite ? (
        <button className="emoji-button favorite active" onClick={onClickFavorite}>★</button>
      ) : (
        <button className="emoji-button favorite" onClick={onClickFavorite}>☆</button>
      )}
      <strong>{item.description}</strong>
      <span> · {item.location}</span>
      <button className="emoji-button delete" onClick={onClickDelete}>🗑</button>
    </div>
  </li>
  );
}

export default ListingCard;
