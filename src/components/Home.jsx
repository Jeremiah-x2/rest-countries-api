import { Country } from "./styles/home.styled";

const Home = ({ countryDetails }) => {
  return (
    <Country to={`/details/` + countryDetails.name}>
      <div className="country--image">
        <img src={countryDetails.flag} alt="" />
      </div>
      <div className="country--about">
        <h5>{countryDetails.name}</h5>
        <ul>
          <li>
            Population: <span>{countryDetails.population}</span>
          </li>
          <li>
            Region: <span>{countryDetails.region}</span>
          </li>
          <li>
            Capital: <span>{countryDetails.capital}</span>
          </li>
        </ul>
      </div>
    </Country>
  );
};

export default Home;
