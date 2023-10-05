import React, { useState } from "react";
import Home from "../components/Home";
import data from "../data.json";
import { Route, Routes } from "react-router-dom";
import Details from "../components/Details";
import SearchFilter from "../components/SearchFilter";
import { Container } from "../components/styles/pages.styed";
const Pages = () => {
  const [countries, setCountries] = useState(data);
  const home = countries.map((item) => (
    <Home key={item.name} countryDetails={item} />
  ));

  function handleChange(e) {
    if (e.target.value === " ") {
      setCountries(data);
    } else {
      const newCountries = data.filter(
        (item) => item.region === e.target.value
      );
      setCountries(newCountries);
    }
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <SearchFilter handleChange={handleChange} />
              <div className="countries">{home}</div>
            </Container>
          }
        />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </>
  );
};

export default Pages;
