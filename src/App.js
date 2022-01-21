import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';



const initialPeople = [
  {
    id: 0,
    name:"Devante",
    status: "barely awake",
    species: "sub-human",
    gender: "zebra"
  },
  {
    id: 1,
    name: "Jasmine",
    status: "unknown",
    species: "hyumane",
    gender: "bacon"
  },
  {
    id: 2,
    name: "Joe",
    status: "baked",
    species: "human",
    gender: "potato",
  }
]


function App() {

  const [people, setPeople] = useState(initialPeople)
  console.log("if u can see me i am working")
 
  useEffect(()=>{
    console.log("im done")
    axios("https://swapi.dev/api/people/")
     .then((res)=>{
       console.log(res.data)
       setPeople(res.data)
     })
  } , [])
  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        people.map(person => {
          return (
            <article>
              <img src={person.img} alt={person.name}></img>
              <h2>{person.name}</h2>
              <p>{person.name} is a {person.gender} {person.species} who is currently {person.status}</p>
            </article>
          )
        })
      }
    </div>
  );
}

export default App;
