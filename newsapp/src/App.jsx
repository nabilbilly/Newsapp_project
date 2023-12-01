import React from "react";
import "./App.css";
import MainContent from "./component/Blogcontent";
import Carousel from "./component/carousel";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Carousel/>
      <MainContent />
      
    </>
  );
}

export default App;
