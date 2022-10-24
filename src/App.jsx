import "./App.scss";
import { useEffect, useState } from "react";
import Main from "./containers/Main/Main";
import Nav from "./containers/Nav/Nav";
import { findBeers } from "./data/beerData";



const App = () => {
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    findBeers().then(setData);
  }, []);
  
    
  
  
  return (
    <div className="app">
      <h1>Explore Beers</h1>
      <Nav setData={setData}/>
      <Main data={data}/>
    </div>
  );
};

export default App;