import API from "./service";

export const addCount = value => dispatch => {
  return dispatch({
    type: "COUNT_DATA",
    value
  });
};
export const SearchTableFilter = value => dispatch => {
  return dispatch({
    type: "TABLE_FILTER",
    value
  });
};
export const getTableData = (value,b) => dispatch => {
  let MetaData=value
  MetaData.url=MetaData.url+b
  console.log(value,b, "-f-----");
  dispatch({ type: "GET_LOADING_STATUS" });
  return API(MetaData).then(function(res) {
    console.log(res, "res");
    dispatch({
      type: "TABLE_DATA",
      value: res.data
    });
  });
};
