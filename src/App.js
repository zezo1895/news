import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navgation from "./component/Navgation/Navgation";
import Container from "react-bootstrap/Container";
import Home from "./page/Home";
import Footer from "./component/footer/Footer";

function App() {
  useEffect(()=>{
    fetchmoive()
  },[])
  const [films, setfilms] = useState([]);
  const [IsActive, setIsActive] = useState("");

  const handleClick = () => {
    setIsActive(!IsActive);
    console.log("ziad");
  };
 
  async function fetchmoive() {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5912fc0e7af3d8f1d433c6a241f9e306"
    );
    const data = await response.json();
    console.log(data);
   
    const datatran = data.results.map((item) => {
      return {
        name:item.original_title,
        image:item.poster_path,
        rate:item.vote_average
      };
    });
    setfilms(datatran);
  }

  return (
    <Fragment>
      <Navgation isActive={IsActive} handleClick={handleClick} />
      <Home ones={films} />
      
      <Footer/>
    </Fragment>
  );
}

export default App;
//
// 5912fc0e7af3d8f1d433c6a241f9e306
