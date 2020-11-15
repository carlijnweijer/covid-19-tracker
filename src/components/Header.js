import { FormControl, MenuItem, Select } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCountries,
  selectSelectedCountry,
} from "../store/summary/selectors";
import { setSelected } from "../store/summary/actions";

export default function Header() {
  const countries = useSelector(selectCountries);
  const selectedCountry = useSelector(selectSelectedCountry);
  const dispatch = useDispatch();

  // console.log("what is summary", summary);
  // console.log("what is countries", countries);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;

    dispatch(setSelected(countryCode));
  };

  return (
    <div className="Header">
      <h1>COVID-19 TODAY'S SITUATION</h1>
      <FormControl>
        <Select
          variant="outlined"
          value={selectedCountry}
          onChange={onCountryChange}
        >
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
