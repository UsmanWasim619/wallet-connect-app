const initialState = {
  selectedTab: 0,
}

const tabMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_TAB":
      return {
        ...state,
        selectedTab: action.payload,
      }
    default:
      return state
  }
}

export default tabMenuReducer

