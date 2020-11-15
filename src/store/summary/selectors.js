export const selectSummary = (state) => state.summary.all;

export const selectCountries = (state) => {
  return state.summary.all.Countries?.map((country) => {
    return { country: country.Country, countryCode: country.CountryCode };
  });
};

export const selectSelectedCountry = (state) => {
  return state.summary.selected;
};
