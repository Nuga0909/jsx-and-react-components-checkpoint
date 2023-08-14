import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Price from "./components/Price";
import Image from "./components/Image";
import Description from "./components/Description";
import Name from "./components/Name";

// let myName = 'Adeshina';

function App({myName}) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={<Image/>}
        />
        <Card.Body>
          <Price />
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary">Buy now!</Button>
        </Card.Body>
      </Card>
      <h2>Hello, {(myName)? myName:"there"}!</h2>
    </>
  );
}

export default App;
