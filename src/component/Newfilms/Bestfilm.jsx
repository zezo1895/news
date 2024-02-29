import React, { Fragment } from "react";
import Productfilm from "./Productfilm";
import "../Newfilms/Bestfilm.css";

const Bestfilm = (props) => {
  // const filmitem=props.news.filter(news=> new.rate > 1).map((movie)=>{
  //     return(
  //      <Fragment>
  //       <Productfilm name={movie.name} url={movie.image} rate={movie.rate} />

  //       </Fragment>
  //     )
  //       })
  const filmitem = props.ones.filter((one) => one.rate > 7);
  const bests = filmitem.map((movie) => {
    return (
      <Fragment>
        <Productfilm name={movie.name} url={movie.image} rate={movie.rate} />
      </Fragment>
    );
  });

  return (
    <Fragment>
      <div className="bests">
        <div className="container-fluid">
          <h1>BEST FILMS</h1>
          <div className="row">{bests}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Bestfilm;
/* console.log({item.name}) */
/* <Productfilm name={item.name} url={item.image} rate={item.rate} />
console.log({item}) */
