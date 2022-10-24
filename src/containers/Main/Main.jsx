import React, {useState, useEffect} from 'react'
import "./Main.scss"; 
import CardList from '../../components/CardList/CardList'



const Main = ({data}) => {
    
  return (
    <>
    {data.length > 0 && <CardList profiles={data} />}
    </>
  )
}

export default Main