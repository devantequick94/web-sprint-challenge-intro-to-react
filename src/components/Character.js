import React from "react";


const DisplayCharacterCard = (props) => {

    console.log("props = ", props)

    const { person } = props

    return (
        
          (
            <article>
              <p>{`${person.name} is a ${person.gender} ${person.species} who is currently ${person.status}`}</p>
            </article> 
          ) 
        
    )
}

export default DisplayCharacterCard;