import "./App.css";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import Details from "./components/Details";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
    )
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <Container>
      <List>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </List>
      <Details info={{ id: 2, name: "name" }}></Details>
    </Container>
  );
}

const List = styled.ul`
  padding: 0px;
  margin: 0;
  list-style: none;
  border: 1px solid black;
  border-radius: 8px;
  li {
    display: flex;
    border-bottom: 1px solid black;
    padding: 16px;
  }
  li:last-child {
    border-bottom: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  gap: 50px;
  padding: 50px;
`;

export default App;
