import axios from "axios";

const setSummary = (summary) => {
  console.log("did I get to setSummary");
  return {
    type: "SUMMARY",
    payload: summary,
  };
};

export const fetchSummary = () => {
  console.log("did we get to thunk function?");
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.get(`https://api.covid19api.com/summary`);
      const summary = response.data;

      console.log("what is summary response", summary);
      dispatch(setSummary(summary));
    } catch (error) {
      console.log(error.response);
    }
  };
};
