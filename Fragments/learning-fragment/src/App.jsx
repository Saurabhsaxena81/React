import FoodItem from "./components/FoodItem";
import ErrorMessage from "./components/ErrorMessage";
import Item from "./components/Item";
import Container from "./components/Container";
import "./App.css";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  // let foodItems = [];
  // let foodItems = [
  //   "Sabji",
  //   "green Vegetable",
  //   "Roti",
  //   "Salad",
  //   "Milk",
  //   "dry fruit",
  // ];
  // let textStateArr = useState("Food item Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // let [textToShow, setTextState] = useState();

  let [foodItems, setFoodItems] = useState([
    // "Sabji",
    // "green Vegetable",
    // "Roti",
    // "Salad",
  ]);
  // console.log(`Current value of textState: ${textToShow}`);
  // let textToShow = "Food item Entered by user";
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      {
        /** this sttement is used to balnk the input box onKeyDown === Enter */
      }
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("food value entered is " + newFoodItem);
    }
    // console.log(event);
    // setTextState(event.target.value);
  };
  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  //   setTextState(event.target.value);
  // };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>

        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage item={foodItems}></ErrorMessage>
        {/* <FoodInput handleOnChange={handleOnChange}></FoodInput> */}
        {/* <p>{textToShow}</p> */}
        <FoodItem item={foodItems}></FoodItem>
      </Container>
    </>

    //using if else
    // if (foodItems.length === 0) {
    //   return <h3>I am Still Hungry</h3>;
    // }
    //usng ternary operators
    // let emptyMessage = foodItems.length === 0 ? <h3>I am Still Hungry</h3> : null;
    /* {emptyMessage} */
    // truthy and falsy  values : null ,undefined ,zero,empty ,NaN
    //logical operators

    // <React.Fragment>
    //   <h1>Healthy food</h1>
    //   <ul class="list-group">
    //     <li class="list-group-item">Dal</li>
    //     <li class="list-group-item">Green Vegetbles</li>
    //     <li class="list-group-item">Roti</li>
    //     <li class="list-group-item">Salad</li>
    //     <li class="list-group-item">milk</li>
    //   </ul>
    // </React.Fragment>
    // <>
    //   <h1>Healthy food</h1>
    //   <ul class="list-group">
    //     <li class="list-group-item">Dal</li>
    //     <li class="list-group-item">Green Vegetbles</li>
    //     <li class="list-group-item">Roti</li>
    //     <li class="list-group-item">Salad</li>
    //     <li class="list-group-item">milk</li>
    //   </ul>
    // </>
    // <>
    //   {/* map function */}
    //   <h1>Healthy food</h1>
    //   <ul className="list-group">
    //     {foodItems.map((item) => (
    //       // here key is used by virtual  DOM
    //       <li key={item} className="list-group-item">
    //         {item}
    //       </li>
    //     ))}
    //   </ul>
    // </>
  );
}

export default App;
