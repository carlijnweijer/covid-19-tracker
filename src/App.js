import { Card, CardContent } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import InfoBox from "./components/InfoBox";
import Table from "./components/Table";
import { fetchSummary } from "./store/summary/actions";
import {
  selectGlobal,
  selectSelectedCountry,
  selectSummary,
} from "./store/summary/selectors";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSummary());
  }, [dispatch]);

  const summary = useSelector(selectSummary);
  const selectedCountry = useSelector(selectSelectedCountry);
  const global = useSelector(selectGlobal);

  const countryToShow = summary.Countries?.find((country) => {
    return country.CountryCode === selectedCountry;
  });

  // console.log("what is the selected country", selectedCountry);
  // console.log("what is countryToShow", countryToShow);

  return (
    <div className="App">
      <div className="appLeft">
        <Header />
        <div className="InfoBoxes">
          <InfoBox
            title="Coronavirus cases"
            cases={
              selectedCountry === "worldwide"
                ? global?.NewConfirmed
                : countryToShow?.NewConfirmed
            }
            total={
              selectedCountry === "worldwide"
                ? global?.TotalConfirmed
                : countryToShow?.TotalConfirmed
            }
          />
          <InfoBox
            title="Recovered"
            cases={
              selectedCountry === "worldwide"
                ? global?.NewRecovered
                : countryToShow?.NewRecovered
            }
            total={
              selectedCountry === "worldwide"
                ? global?.TotalRecovered
                : countryToShow?.TotalRecovered
            }
          />
          <InfoBox
            title="Deaths"
            cases={
              selectedCountry === "worldwide"
                ? global?.NewDeaths
                : countryToShow?.NewDeaths
            }
            total={
              selectedCountry === "worldwide"
                ? global?.TotalDeaths
                : countryToShow?.TotalDeaths
            }
          />
        </div>
      </div>
      <div className="appRight">
        <Card>
          <CardContent>
            <h2>Live cases by country</h2>
            <Table />
            <h2>Worldwide new cases</h2>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
