import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

import './Items.css'


const Items = props => {
    
    const formatter = new Intl.NumberFormat('no-NO', {
        style: 'currency',
        currency: 'NOK',
    })

    const [qty, setQty] = useState(0);

    const plusAmountHandler = () => {
        // console.log("PLUS Clicked!")
        setQty((qty) => qty + 1)
        const itemQty = qty + 1
        
        props.onCollectData(props.item.price, itemQty, props.item.key)
    }

    const minusAmountHandler = () => {
        // console.log("MINUS Clicked!")
        if(qty > 0) {
            setQty((qty) => qty - 1)
            const itemQty = qty -1
            props.onCollectData(props.item.price, itemQty, props.item.key)
            return;
        }
        console.log("Must be more than 1")
    }

    //Check that the input is both a Number and 
    const changeHandler = (input) => {
        let inputVal = input.target.value

        if(!inputVal.isNan && inputVal< 1) {
            inputVal = 0;
            console.log("Cannot do")
        }

        setQty(inputVal)
        props.onCollectData(props.item.price, inputVal, props.item.key)

    }
    // console.log(props.item.name + ": ", qty) //This functionlity works.
    let total = props.item.price * qty;

    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.item.imgSrc} />
        <Card.Body>
            <Card.Title>{props.item.name}</Card.Title>
            <h6>{formatter.format(props.item.price)}</h6>
            <h6>Qty: <input className="qty-input" type="number" value={qty} onChange={changeHandler} /></h6>
            <h6>Total: {formatter.format(total)}</h6>
            <Button className={"button-left"} variant="primary" onClick={minusAmountHandler}>-</Button>
            <Button className={"button-right"} variant="primary" onClick={plusAmountHandler}>+</Button>
        </Card.Body>
    </Card>
 );
}

export default Items;