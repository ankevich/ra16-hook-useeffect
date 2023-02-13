import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";

const Details = ({ info }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
    )
      .then((response) => response.json())
      .then((data) => setUser(data))
      .finally(() => setIsLoading(false));
  }, [info.id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (user.id === undefined) {
    return null;
  }

  return (
    <StyledDetails>
      <img src={user.avatar}></img>
      <p>{user.name}</p>
      <p>{user.details.city}</p>
      <p>{user.details.company}</p>
      <p>{user.details.position}</p>
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
