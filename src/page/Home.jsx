import React, { Fragment } from "react";
import Landing from "../component/Landing";
import Newfilms from "../component/Newfilms/Newfilms";
import Bestfilm from "../component/Newfilms/Bestfilm";

const Home = (props) => {


return(
  <Fragment>
    <Landing />
    <Bestfilm ones={props.ones} />
    <Newfilms new={props.ones} />
  
  
  </Fragment>
);
}
export default Home;
