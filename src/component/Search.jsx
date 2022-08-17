import React, { useState } from "react";

const Search = ({ text, setText }) => {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Search;
