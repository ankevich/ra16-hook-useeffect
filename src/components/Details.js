import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";

const Details = ({ info }) => {
  const [state, setState] = useState({});
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
    )
      .then((response) => response.json())
      .then((data) => setState(data));
  });

  if (state.id === undefined) {
    return null;
  }
  
  return (
    <StyledDetails>
      <img src={state.avatar}></img>
      <p>{state.name}</p>
      <p>{state.details.city}</p>
      <p>{state.details.company}</p>
      <p>{state.details.position}</p>
    </StyledDetails>
  );
};

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    margin: 0;
    padding: 8px;
  }
`;

export default Details;
