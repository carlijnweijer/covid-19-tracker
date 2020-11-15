import React from "react";
import { useSelector } from "react-redux";
import { selectCountriesData } from "../store/summary/selectors";

export default function Table() {
  const countries = useSelector(selectCountriesData);

  function compare(a, b) {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  }

  const sortedCountries = countries?.sort(compare);

  return (
    <div className="table">
      {sortedCountries?.map((country) => {
        return (
          <tr>
            <td>{country.country}</td>
            <td>{country.cases}</td>
          </tr>
        );
      })}
    </div>
  );
}
