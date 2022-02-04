import "./App.css";
import { React, useState } from "react";
import Person from "./components/Person/Person";
import ItemList from "./components/Items/ItemList";
import { Container } from "react-bootstrap";
import AuthContext from './context/auth.context';

import ShoppingList from "./components/ShoppingList/ShoppingList";

const { itemData } = require("./data/itemData");
// const {personData} = require('./data/personData')

function App() {
  let totals = Array.from(Array(itemData.length).fill(0));

  let [grandTotal, setGrandTotal] = useState(totals);
  let [totalAmount, setTotalAmount] = useState(0);

  const collectData = (itemPrice, itemQty, itemKey) => {
    const totalPrice = itemPrice * itemQty;

    grandTotal[itemKey] = totalPrice;

    setGrandTotal(grandTotal);

    const calculateTotalAmount = grandTotal.reduce(
      (prev, current) => prev + current
    );
    setTotalAmount(calculateTotalAmount);
  };

  console.log("GrandTotal is: ", grandTotal);
  console.log("Total Cost is: ", totalAmount);
  return (
    <AuthContext.Provider>
    <div className="App">
      
      <Container>
        <Person amount={totalAmount} />
        <ItemList onCollectData={collectData} itemData={itemData} />
      </Container>
      {/* To pass data to the shopping list I will need to pass the itemName from Items, and store in the state. Maybe store it into a seperate state than the price calculations? */}
      {totalAmount > 0 && <ShoppingList />}
    </div>
    </AuthContext.Provider>
  );
}

export default App;
