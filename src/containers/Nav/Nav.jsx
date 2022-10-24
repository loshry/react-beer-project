// container for Navigation Bar of SearchBox and Specific SearchItems

import React, {useState, useEffect} from 'react';
import "./Nav.scss"; 
import SearchBox from '../../components/SearchBox/SearchBox'
import RadioButtons from '../../components/RadioButtons/RadioButtons';
import CardList from '../../components/CardList/CardList';




const Nav = () => { 
  const url = "https://api.punkapi.com/v2/beers";
  const [profiles, setProfiles] = useState([]);
  const [selected, setBeers] = useState("All");
  const options = ["All", "High ABV (> 6%)", "Classic", "Acidic (Ph <4)"];
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    console.log(cleanInput);
    setSearchTerm(cleanInput);
    searchBeers(cleanInput);
  };

  

  useEffect(() => {
    getBeerType();
  }, [selected]);

  const searchBeers = async (beerName) => {
    const res = await fetch(url+"?beer_name="+ beerName);
    const data = await res.json();
    const newProfiles = data.map((profile) => cleanProfile(profile));
    setProfiles(newProfiles);
  };

  const cleanProfile = (profile) => {
    return {
      id: profile.id,
      name: profile.name,
      image: profile.image_url,
      tagline: profile.tagline,
      description: profile.description,
      abv: profile.abv,
      ph: profile.ph,
    };
  };

  const onChange = (event) => {
    console.log(event.target.value);
    setBeers(event.target.value);
  };

  const getBeerType = async () => {
    let selectedUrl = url;
    if (selected === "abv") {
      selectedUrl = url + "?abv_gt=6";
    } else if (selected === "classic") {
      selectedUrl = url + "?abv_gt=3.9&abv_lt=5.1";
    }
    console.log(selectedUrl);

    let res = await fetch(selectedUrl);
    const data = await res.json();
    // clean the data!
    let newProfiles = data.map((profile) => cleanProfile(profile));
    if (selected === "ph") {
      newProfiles = newProfiles.filter((profile) => {
        return profile.ph < 4;
      });
    }
    setProfiles(newProfiles);
  };
    

  return (
    <>
    <SearchBox label={"Search Beers"} searchTerm={searchTerm} handleInput={handleInput}/>
      <RadioButtons
        onChange={onChange}
        selected={selected}
        options={options}
        label="Beers"
      />
      <CardList profiles={profiles} />
    </>
  )
}

export default Nav