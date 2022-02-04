import {React} from "react";
import { Container, Row, Col } from "react-bootstrap";
import PersonCard from "./PersonCard";

import "./Person.css";

// const personList = require("../../data/personData")


const Person = props => {

  class Person {
    name = "Billionnaire 1";
    netWorth = 1000000000;
    imgSrc = "https://dummyimage.com/500x600/000/fff";
  }

  const person = new Person();

  return (
    <Container>
      <Row className="justify-content-md-center">
        <div className="card-margin">
          <Col>
            <PersonCard person={person} amount={props.amount}/>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Person;
