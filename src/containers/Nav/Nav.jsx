// container for Navigation Bar of SearchBox and Specific SearchItems

import React, {useState, useEffect} from 'react';
import "./Nav.scss"; 
import SearchBox from '../../components/SearchBox/SearchBox'
import CheckBoxes from '../../components/CheckBoxes/CheckBoxes';
import { findBeers, findAbv, findClassic, findPh, findBeerByName, findFilteredBeers } from "../../data/beerData";
import { isCompositeComponent } from 'react-dom/test-utils';





const Nav = ({setData}) => { 
  // searchBox data
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearchBoxInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    console.log(cleanInput);
    setSearchTerm(cleanInput);

    console.log(checkedState);
    findFilteredBeers(cleanInput, checkedState[1], checkedState[2]).then(setData);

    // findBeerByName(cleanInput).then(setData);
  };

  //CheckBox Data
  const checkBoxOptions = ["High ABV (>6.0%)", "Classic", "Acidity (Ph <4)"];
  const [checkedState, setCheckedState] = useState(
    new Array(checkBoxOptions.length).fill(false)
  );

  const onCheckBoxChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    console.log(searchTerm);
    findFilteredBeers(searchTerm, updatedCheckedState[1], updatedCheckedState[2]).then(setData);

    
  };

  


  // radioButton data
  // const [radioButtonSelected, setRadioButtonSelected] = useState("All");
  // const radioButtonOptions = ["All", "High ABV (>6.0%)", "Classic", "Acidity (Ph <4)"];


  

  // const onRadioButtonChange = (event) => {
  //   const selected = event.target.value;
  //   console.log(selected);
  //   setRadioButtonSelected(selected);
  //   if (selected === "high abv (>6.0%)") {
  //     findAbv().then(setData);
  //   } else if (selected === "classic") {
  //     findClassic().then(setData);
  //   } else if (selected === "acidity (ph <4)") {
  //     findPh().then(setData);
  //   } else {
  //     findBeers().then(setData);
  //   }
    
  // };
  
    

  return (
    <>
      <SearchBox label={"Search Beers"} searchTerm={searchTerm} handleInput={handleSearchBoxInput}/>
      <CheckBoxes
        checked={checkedState}
        options={checkBoxOptions}
        onChange={onCheckBoxChange}
        label="Beer"
      />
    </>
  )
}

export default Nav