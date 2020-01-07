const initialState = {
    FirstData: [],
    IsLoading: true

  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case "ACCOUNT_DATA_ALL":
        return {
          ...state,
          FirstData: action.value,
          IsLoading: false
        };

        case"GET_LOADING_STATUS":
        return {
          ...state,
          IsLoading: true
        };
    
      default:
        return state;
    }
  }