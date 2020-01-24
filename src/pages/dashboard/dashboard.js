import React, { useState, useEffect,useRef } from "react";
import Header from "../../CommonComponents/Header";
import { useDispatch, useSelector } from "react-redux";
import { addCount, getTableData } from "../../redux/actions/dashboardAction";
import { Table } from "react-bootstrap";
import ListViewGrid from "../../CommonComponents/ListViewGrid";
import "./dashboard.css";

export default function Dashboard() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(20);
  const [loading, setLoading] = useState(true);
  // const count = useSelector(state => state.counter.count);
  const TableData = useSelector(
    state => state.dashboardReducer.TableSearchData
  );
  const myScroll = useRef();
  const TableDataLoading = useSelector(
    state => state.dashboardReducer.TableDataLoading
  );
  var Data = new Array(36);
  Data.fill(1);
  console.log(Data, "Data");
  const dispatch = useDispatch();
  const MetaData = {
    method: "get",
    url: "https://demo4846532.mockable.io/mocktable/"
  };
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  useEffect(() => {
    dispatch(addCount(count));
  }, [count]);

  useEffect(()=>{
    myScroll.current.addEventListener("scroll", () => {
      if (
        myScroll.current.scrollTop + myScroll.current.clientHeight >=
        myScroll.current.scrollHeight
      ) {
        console.log("----loadmore---")
        loadMore();
      }
      else{
        console.log("-----d--d-d-d-d---")
      }
    });
  });
  

  function showItems() {
    var item = [];
    for (var i = 0; i < items; i++) {
      item.push(<li key={i}>Data {i}</li>);
    }
    return item;
  }
  function loadMore() {
  setLoading(true);
    setTimeout(() => {
     setItems( items + 20)
      setLoading(false)
    }, 2000);
  }

  return (
    <>
      <div>
        <Header />
        <p>You clicked {count} times</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click me
        </button>
        <button
          Primary
          onClick={() => {
            dispatch(getTableData(MetaData,0));
          }}
        >
          Get Data{" "}
        </button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {console.log(TableData, TableDataLoading, "---TableData-----")}
            {TableDataLoading === true ? (
              <div>
                <div className="">
                  <div>{"loading...."}</div>
                </div>
              </div>
            ) : (
              <>
                {TableData.map(data => (
                  <tr>
                    {console.log(data, "--=df=f===")}

                    <td> {data.Account}</td>
                    <td> {data.Amount}</td>
                    <td>{data.TransactionDate}</td>
                    <td>{data.TransactionID}</td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </Table>
        <div>
        pages-
        <span  style={{"margin":"10px"}} onClick={() => {
            dispatch(getTableData(MetaData,0));
          }}><a>0</a></span>
        <span style={{"margin":"10px"}}  onClick={() => {
            dispatch(getTableData(MetaData,1));
          }}><a>1</a></span>
         <span style={{"margin":"10px"}}  onClick={() => {
            dispatch(getTableData(MetaData,1));
          }}><a>2</a></span>
        
      </div>
        <ListViewGrid />
      </div>
      <ul style={{ height: "420px", overflow: "auto" }} ref={myScroll}>
              {showItems()}
            </ul>
            {console.log(loading,"===loading===")}
            {loading
              ? <p className="App-intro">
                  loading ...
                </p>
              : ""}
    
    </>
  );
}
