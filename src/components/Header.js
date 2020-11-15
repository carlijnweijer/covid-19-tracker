import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSummary } from "../store/summary/selectors";
import { fetchSummary } from "../store/summary/actions";

export default function Header() {
  const summary = useSelector(selectSummary);
  console.log("what is summary", summary);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSummary());
  }, [dispatch]);

  return (
    <div className="Header">
      <h1>Covid 19 tracker</h1>
      <FormControl>
        <Select variant="outlined" value="worldwide">
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {/* {countries.map((country) => {
            return (
              <MenuItem key={country.ISO2} value={country.Country}>
                {country.Country}
              </MenuItem>
            );
          })} */}
        </Select>
      </FormControl>
    </div>
  );
}
