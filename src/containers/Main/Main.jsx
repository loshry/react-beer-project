import React, {useState, useEffect} from 'react'
import "./Main.scss"; 
import CardList from '../../components/CardList/CardList'



const Main = () => {
    const [profiles, setProfiles] = useState([]);
    const url = "https://api.punkapi.com/v2/beers";

    const getBeers = async () => {
        const res = await fetch(url);
        const data = await res.json();
        const newProfiles = data.map((profile) => cleanProfile(profile));
        setProfiles(newProfiles);
      };

      useEffect(() => {
        getBeers();
      }, []);

    
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
  return (
    <CardList profiles={profiles} />
  )
}

export default Main