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
  const {currentPage, setCurrentPage} = useState(1)
  
  console.log("if u can see me i am working")
 
  useEffect(()=>{
    axios(`https://swapi.dev/api/people/`)
     .then((res)=>{
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
          return( <DisplayCharacterCard key={`App.peoplemap.person1994K${person.id}`} person={person} />
          )
        })
      }
    </div>
  );
}

export default App;
