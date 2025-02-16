import React from "react";
import './index.css'
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import BigCard from "./components/BigCard";
import Card from "./components/Card.jsx";
import data from "../src/data.js"

const cards = data.map((item) =>{
    return (
        <Card 
          key= {item.id}
          item= {item}
      />
    )
})

function App() {
    return (
        <>
            <NavBar />
            <Main />
            <section className= "cards-list">
                {cards}
            </section>
        </>
    );
}

export default App;
