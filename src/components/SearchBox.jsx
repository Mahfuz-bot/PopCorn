/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

export default function SearchBox({ query, onSearch, onQueryType, queryType }) {
  const inputElement = useRef(null);
  useEffect(function () {
    inputElement.current.focus();
  }, []);
  return (
    <div className="px-4 py-1 text-black bg-white rounded-xl">
      <span className="cursor-pointer">🔍</span>
      <input
        ref={inputElement}
        type="text"
        placeholder="Search..."
        className="outline-1"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
      />
      <span className="cursor-pointer" onClick={() => onSearch("")}>
        ❌
      </span>
      <select value={queryType} onChange={(e) => onQueryType(e.target.value)}>
        <option value={null}>None</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
      </select>
    </div>
  );
}
