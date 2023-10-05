import React, { useState } from "react";
import data from "../data.json";
import { SearchFilterContainer, Search } from "./styles/searchFilter";
import { AiOutlineSearch } from "react-icons/ai";
import { redirect, useNavigate } from "react-router-dom";

export function SearchModal({ name }) {
  return <Search to={`/details/` + name}>{name}</Search>;
}

const SearchFilter = (props) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchInclude = data.filter((item) =>
    item.name.toLowerCase().startsWith(search.toLowerCase())
  );

  const handleSearch = (e) => {
    const newSearchValue = e.target.value;
    setSearch(newSearchValue);
  };

  const handleKeyDownSearch = (e) => {
    if (e.key === "Enter") {
      console.log(search);
      if (searchInclude.length !== 0) {
        navigate(
          "/details/" +
            search.charAt(0).toUpperCase() +
            search.slice(1).toLowerCase()
        );
      } else {
        return;
      }
    }
  };

  return (
    <SearchFilterContainer>
      <div className="search--filter">
        {search && (
          <div className="search-modal">
            {searchInclude.length === 0 ? (
              <p style={{ color: "red" }}>Check your spelling!</p>
            ) : (
              searchInclude.map((item, index) => (
                <SearchModal key={index} name={item.name} />
              ))
            )}
          </div>
        )}
        {/* {search && (
          <div className="search-modal">
            {searchInclude.map((item, index) => (
              <SearchModal key={index} name={item.name} />
            ))}
          </div>
        )} */}
        <div className="search-input">
          <AiOutlineSearch />
          <input
            type="text"
            className="search"
            value={search}
            onChange={handleSearch}
            onKeyDown={handleKeyDownSearch}
            placeholder="Search for a country"
          />
        </div>
      </div>
      <select name="region" onChange={props.handleChange}>
        <optgroup>
          <option value=" ">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Polar">Polar</option>
        </optgroup>
      </select>
    </SearchFilterContainer>
  );
};

export default SearchFilter;
