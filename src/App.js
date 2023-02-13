import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <List>
        <li>Dorthy McClure Sr.</li>
        <li>Kyleigh Ortiz</li>
        <li>Delia Halvorson</li>
      </List>
      <Details>
        <img src = "https://i.pravatar.cc/300"></img>
        <p>Kyleigh Ortiz</p>
        <p>City: Kassulkeport</p>
        <p>Company: Jacobson - Davis</p>
        <p>Position: Dynamic Accountability Strategist</p>
      </Details>
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

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    margin: 0;
    padding: 8px;
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
