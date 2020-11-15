const initialState = {
  all: {},
  selected: "worldwide",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SUMMARY":
      return {
        ...state,
        all: payload,
      };

    case "SET_SELECTED":
      return {
        ...state,
        selected: payload,
      };

    default:
      return state;
  }
};
