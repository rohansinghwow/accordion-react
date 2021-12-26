import React from "react";
import Main from './components/Main'
import Accordion from "./components/Accordion";

import data from './data'





const mapper = data.map(item=>{

  return (
    <Accordion key={item.id} id={item.id} title={item.title} info={item.info}/>
  )
})

export default function App() {
  return(
    <>
    <Main/>
    {mapper}
  </>
  )
  
};
