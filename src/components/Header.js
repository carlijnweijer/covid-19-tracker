import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSummary, selectCountries } from "../store/summary/selectors";
import { fetchSummary } from "../store/summary/actions";

export default function Header() {
  const summary = useSelector(selectSummary);
  const countries = useSelector(selectCountries);
  const [country, setCountry] = useState("worldwide");

  console.log("what is summary", summary);
  console.log("what is countries", countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSummary());
  }, [dispatch]);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;

    console.log("what is countrycode", countryCode);
    setCountry(countryCode);
  };

  return (
    <div className="Header">
      <h1>Covid 19 tracker</h1>
      <FormControl>
        <Select variant="outlined" value={country} onChange={onCountryChange}>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries?.map((country) => {
            return (
              <MenuItem key={country.countryCode} value={country.countryCode}>
                {country.country}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
