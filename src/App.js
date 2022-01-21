import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import DisplayCharacterCard from './components/Character';



const initialPeople = [
  /**{
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
  }*/
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
     .catch((err) => {
       console.log("you messed up big time")
     })
  } , [])
  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        people.map(person => {
          return<DisplayCharacterCard key={`App.peoplemap.personId-${person.id}`} person={person} />
        })
      }
    </div>
  );
}

export default App;
