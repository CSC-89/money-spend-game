import {React} from "react";

import { Card, Button } from "react-bootstrap";
import './PersonCard.css'

const PersonCard = props => {

    const formatter = new Intl.NumberFormat('no-NO', {
        style: 'currency',
        currency: 'NOK',
    })

    const changeHandler = () => {
      //Logic for the sending of netWorth to Item.js
    }
  
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.person.imgSrc} />
            <Card.Body>
                <Card.Title>{props.person.name}</Card.Title>
                <h6>Net Worth: {formatter.format(props.person.netWorth)}</h6>
                <h6 className="minusFigure"> - {formatter.format(props.amount)}</h6>
                <h6 onChange={changeHandler}>= {formatter.format(props.person.netWorth - props.amount)}</h6>
                <Button variant="primary">Reset</Button>
            </Card.Body>
        </Card>
    );
}

export default PersonCard