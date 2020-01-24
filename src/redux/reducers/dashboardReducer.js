const initialState = {
   CountData: "",
   TableDataLoading:true,
   TableData:[],
   TableSearchData:[]

  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case "COUNT_DATA":
        return {
          ...state,
          CountData: action.value,
        };

    case "GET_LOADING_STATUS":
    return {
        ...state,
        TableDataLoading:true,
    }
    case "TABLE_DATA":
    return {
        ...state,
        TableData:action.value,
        TableDataLoading:false,
        TableSearchData:action.value
    }
    case "TABLE_FILTER":
    {console.log(filterData,state.TableSearchData,state,"---filterData----")}
    var filterData=state.TableData.filter(word => word.Account.indexOf(action.value) > -1);
    {console.log(filterData,state.TableSearchData,state,"---filterData----")}
    return {
      ...state,
      TableSearchData:filterData
    }

    
      default:
        return state;
    }
  }