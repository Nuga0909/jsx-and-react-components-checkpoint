import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Price from "./components/Price";
import newImage from "./components/Image";
import Description from "./components/Description";
import Name from "./components/Name";

function App({ myName }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={newImage} />
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
      <div className="bottom">
        <h2>Hello, {myName ? myName : "there"}!</h2>
        <img src={myName ? newImage : ""} alt="" className="add-image" />
      </div>
    </>
  );
}

export default App;
