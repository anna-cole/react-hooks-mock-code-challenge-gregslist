import React, { useState } from "react";

function Search({ onSearchChange }) {
  const [textChange, setTextChange] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault();
    onSearchChange(textChange)
  } 
  
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={textChange}
        onChange={e => setTextChange(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
