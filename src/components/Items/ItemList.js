import {React} from "react";

import { Container, Row, Col } from "react-bootstrap";
import Items from "./Items";
import './ItemList.css'


const ItemList = props => {

    return (
        <Container>
            <Row>
                {props.itemData.map((item, index) => (
                    <Col className="card-margin" key={index}><Items itemData={props.itemData} item={item} onCollectData={props.onCollectData}/></Col>
                ))}
            </Row>
        </Container>
    );
}

export default ItemList;