// container for Navigation Bar of SearchBox and Specific SearchItems

import React, {useState, useEffect} from 'react';
import "./Nav.scss"; 
import SearchBox from '../../components/SearchBox/SearchBox'
import RadioButtons from '../../components/RadioButtons/RadioButtons';
import { findBeers, findAbv, findClassic, findPh, findBeerByName } from "../../data/beerData";





const Nav = ({setData}) => { 
  // searchBox data
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearchBoxInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    console.log(cleanInput);
    setSearchTerm(cleanInput);
    findBeerByName(cleanInput).then(setData);
  };

  // radioButton data
  const [radioButtonSelected, setRadioButtonSelected] = useState("All");
  const radioButtonOptions = ["All", "ABV", "Classic", "Ph"];


  

  const onRadioButtonChange = (event) => {
    const selected = event.target.value;
    console.log(selected);
    setRadioButtonSelected(selected);
    if (selected === "abv") {
      findAbv().then(setData);
    } else if (selected === "classic") {
      findClassic().then(setData);
    } else if (selected === "ph") {
      findPh().then(setData);
    } else {
      findBeers().then(setData);
    }
    
  };
  
    

  return (
    <>
      <SearchBox label={"Search Beers"} searchTerm={searchTerm} handleInput={handleSearchBoxInput}/>
      <RadioButtons
        onChange={onRadioButtonChange}
        selected={radioButtonSelected}
        options={radioButtonOptions}
        label="Beer"
      />
    </>
  )
}

export default Nav