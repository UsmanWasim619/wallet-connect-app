const initialState = {
  isVisible: true, // Default state
};

const HideAndShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW":
      return { ...state, isVisible: true };
    case "HIDE":
      return { ...state, isVisible: false };
    default:
      return state;
  }
};

export default HideAndShowReducer;
