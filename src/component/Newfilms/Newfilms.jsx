import React, { Fragment } from "react";
import "../Newfilms/Newfilms.css"

import "boxicons"
import Productfilm from "./Productfilm";
import Bestfilm from "./Bestfilm";
import Pagenation from "../Pagenation";



const Newfilms=(props)=>{
    
    // const filmitem=props.item.map((movie)=>{
    //  return(
    //    <Fragment>
    //    <div>{movie.name}</div>
    //   <img src={urlim+movie.image} alt="" />
    //    </Fragment>
    // )
    // })

  const filmitem=props.new.map((movie)=>{
 return(
  <Fragment>
   <Productfilm name={movie.name} url={movie.image} rate={movie.rate} id={movie.id} />
   
   </Fragment>
 )
   })
 
return(
    <div className="allfilmss">
        <div className="container another">
            <h1>NEW FILMS</h1>
            <div className="row">{filmitem}
   
            </div>
               
         <Pagenation getpage={props.getpage} page={props.page}  fetchmoive={props.fetchmoive} />
        </div>
    </div>
)
}
export default Newfilms;