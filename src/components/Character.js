import React from "react";


const DisplayCharacterCard = (props) => {

    console.log("props = ", props)

    const { person } = props

    return (
        
          (
            <article>
              <img src={person.img} alt={person.name}></img>
              <h2>{person.name}</h2>
              <p>{`${person.name} is a ${person.gender} ${person.species} who is currently ${person.status}`}</p>
            </article> 
          ) 
        
    )
}

export default DisplayCharacterCard;