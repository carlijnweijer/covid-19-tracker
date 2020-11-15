import { Card, CardContent } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import InfoBox from "./components/InfoBox";
import { fetchSummary } from "./store/summary/actions";
import {
  selectSelectedCountry,
  selectSummary,
} from "./store/summary/selectors";

/*    
"Country": "Afghanistan",
"CountryCode": "AF",
"Slug": "afghanistan",
"NewConfirmed": 66,
"TotalConfirmed": 43035,
"NewDeaths": 10,
"TotalDeaths": 1605,
"NewRecovered": 31,
"TotalRecovered": 35067,
"Date": "2020-11-15T18:58:22Z",
*/

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSummary());
  }, [dispatch]);

  const summary = useSelector(selectSummary);
  const selectedCountry = useSelector(selectSelectedCountry);

  /*
if selected is something, find data for that selected
*/

  const countryToShow = summary.Countries?.find((country) => {
    return country.CountryCode === selectedCountry;
  });

  console.log("what is the selected country", selectedCountry);
  console.log("what is countryToShow", countryToShow);

  const newCases = countryToShow.NewConfirmed;
  const totalCases = countryToShow.TotalConfirmed;
  const newRecovered = countryToShow.NewRecovered;
  const totalRecovered = countryToShow.TotalRecovered;
  const newDeaths = countryToShow.NewDeaths;
  const totalDeaths = countryToShow.TotalDeaths;

  return (
    <div className="App">
      <div className="appLeft">
        <Header />
        <div className="InfoBoxes">
          <InfoBox
            title="Coronavirus cases"
            cases={newCases}
            total={totalCases}
          />
          <InfoBox
            title="Recovered"
            cases={newRecovered}
            total={totalRecovered}
          />
          <InfoBox title="Deaths" cases={newDeaths} total={totalDeaths} />
        </div>
      </div>
      <div className="appRight">
        <Card>
          <CardContent>
            <h2>Live cases by country</h2>
            <h2>Worldwide new cases</h2>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
