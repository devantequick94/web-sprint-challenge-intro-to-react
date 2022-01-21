import React from "react";
import styled from "styled-components";

const P = styled.p`
font-size: 1.5em;
text-align: center;
color: #FFF8DC;
font-family: 'Myriad Pro Regular';
`;

const DisplayCharacterCard = (props) => {

    const { person } = props



    return (
        
          (
            <article>
              <P>{`${person.name} is a ${person.gender} ${person.species} who is currently ${person.status}`}</P>
            </article> 
          ) 
        
    )
}

export default DisplayCharacterCard;