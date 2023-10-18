import React, { useState } from "react";

function Search({ onChangeText }) {
  const [changeText, setChangeText] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    onChangeText(changeText)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={changeText}
        onChange={e => setChangeText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;