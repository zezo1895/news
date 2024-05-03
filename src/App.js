import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navgation from "./component/Navgation/Navgation";
import Home from "./page/Home";
import Footer from "./component/footer/Footer";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Moivedetails from "./page/Moivedetails";
import Layout from "./page/Layout";
import { motion , AnimatePresence } from "framer-motion";

function App() {
  useEffect(() => {
    fetchmoive();
  }, []);
  const [films, setfilms] = useState([]);
  const [IsActive, setIsActive] = useState("");
  const [Pagecount, setPagecount] = useState("");
  const [Count,setCount]=useState("")
  
console.log(Count)
  const handleClick = () => {
    setIsActive(!IsActive);
  
  };
  // ===============all movie======================
  async function fetchmoive() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=84efd41b07a43bc7a00301e107350456&language=ar-US&page=${Count}`)
     
     
    const data = await response.json();
    
    
    const page = await data.total_pages;
    setPagecount(page);
    // console.log(data);

    const datatran = data.results.map((item) => {
      return {
        id: item.id,
        name: item.original_title,
        image: item.poster_path,
        rate: item.vote_average,
      };
    });
    setfilms(datatran);
  } // ===============Page======================
  async function getpage(page) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=84efd41b07a43bc7a00301e107350456&language=ar-US&page=${page}`
    );
    const data = await response.json();
    const datatran = data.results.map((item) => {
      return {
        id: item.id,
        name: item.original_title,
        image: item.poster_path,
        rate: item.vote_average,
      };
    });
    setfilms(datatran);
    setCount(page)
    
  }
  // ===============Search======================
  async function search(word) {
    if (word === "") {
      fetchmoive();
    } else {
      const serchres = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=84efd41b07a43bc7a00301e107350456&query=${word}&language=en-US&page=${Count}`
      );
      const data = await serchres.json();

      const page = await data.total_pages;
      setPagecount(page);

      const datatran = data.results.map((item) => {
        return {
          id: item.id,
          name: item.original_title,
          image: item.poster_path,
          rate: item.vote_average,
        };
      });
      setfilms(datatran);
      console.log(datatran)
    }
  }

   const routes = createHashRouter(
     createRoutesFromElements(
       <Route path="/"element={<Layout/>} errorElement={<h1>Layout</h1>} >
      <Route
         path="/"
         element={<Home ones={films}
      getpage={getpage} page={Pagecount} />}
         />
         <Route path="/movie/:id" element={<Moivedetails />} />
       </Route>
     )
   );
  return (
    <Fragment>
      <Navgation
        isActive={IsActive}
        handleClick={handleClick}
        search={search}
      />
      <AnimatePresence mode="wait" initial={true}>
     <RouterProvider router={routes}/>
     </AnimatePresence>
      <Footer />
    </Fragment>
  );
}

export default App;
//
// 5912fc0e7af3d8f1d433c6a241f9e306
