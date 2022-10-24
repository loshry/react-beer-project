// container for Navigation Bar of SearchBox and Specific SearchItems

import React, {useState, useEffect} from 'react';
import "./Nav.scss"; 
import SearchBox from '../../components/SearchBox/SearchBox'
import CheckBoxes from '../../components/CheckBoxes/CheckBoxes';
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

  //CheckBox Data
  const checkBoxOptions = ["All", "High ABV (>6.0%)", "Classic", "Acidity (Ph <4)"];
  const [checkedState, setCheckedState] = useState(
    new Array(checkBoxOptions.length).fill(false)
  );

  const onCheckBoxChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    
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