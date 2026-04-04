import { useState } from "react";

function Form({ handleSubmit }) {
  const [searchEntry, setSearchEntry] = useState("");
  function updateSearchInput(e) {
    setSearchEntry(e.target.value);
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, searchEntry);
      }}
      className="search-form"
    >
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={updateSearchInput}
        value={searchEntry}
      />

      <button
        type="submit"
        disabled={!searchEntry.trim()}
        className={`search-button ${searchEntry.trim() ? "active" : ""}`}
      >
        <svg className="lupa" height="32px" width="32px">
          <path
            d="M10 2a8 8 0 105.29 14.01l4.42 4.42a1 1 0 001.41-1.41l-4.42-4.42A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"
            fill="lightgray"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
}

export default Form;
