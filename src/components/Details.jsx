import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import { BsArrowLeft } from "react-icons/bs";
import { Country, Back, BorderLink } from "./styles/details.styled";

const Details = () => {
  const params = useParams();

  const item = data.filter((item) => item.name === params.name);
  const [country] = item;

  console.log(data);

  return (
    <>
      <Country>
        <Back to={"/"}>
          <BsArrowLeft />
          Back
        </Back>
        <div className="country--details">
          <img src={country.flag} alt="" />
          <div>
            <div>
              <h2>{country.name}</h2>
              <div className="info">
                <ul>
                  <li>
                    Native Name: <span>{country.nativeName}</span>
                  </li>
                  <li>
                    Population: <span>{country.population}</span>
                  </li>
                  <li>
                    Region: <span>{country.region}</span>
                  </li>
                  <li>
                    Sub Region: <span>{country.subregion}</span>
                  </li>
                  <li>
                    Capital: <span>{country.capital}</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    Top Level Domain: <span>{country.topLevelDomain}</span>
                  </li>
                  <li>
                    Currencies:{" "}
                    {country.currencies.map((currency, index) => (
                      <span key={index}>{currency.name}</span>
                    ))}
                  </li>
                  <li>
                    Languages:{" "}
                    {country.languages.map((language, index) => (
                      <span key={index}>{language.name} </span>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
            {country.borders && (
              <div className="borders">
                Border Countries:{" "}
                <div>
                  {country.borders.map((item, index) => (
                    <BorderLink
                      to={
                        `/details/` +
                        data
                          .filter((i) => item === i.alpha3Code)
                          .map((i) => i.name)
                      }
                      key={index}
                    >
                      {item}
                    </BorderLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Country>
    </>
  );
};

export default Details;
