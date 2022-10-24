import "./App.scss";
import Nav from "./containers/Nav/Nav";
import Main from "./containers/Main/Main";

const App = () => {
 
  

  return (
    <div className="app">
      <h1>Explore Beers</h1>
      <Nav />
      <Main />      
    </div>
  );
};

export default App;