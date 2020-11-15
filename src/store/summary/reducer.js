const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SUMMARY":
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};
